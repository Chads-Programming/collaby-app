import { clerkMiddleware, createRouteMatcher, currentUser, getAuth, User as ClerkUser, auth as pepin } from "@clerk/nextjs/server";
import NodeCache from 'node-cache'
import { User } from '@prisma/client'
import { env } from "./env";
import { NextRequest } from "next/server";

const cache = new NodeCache({
  stdTTL: 600
})

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/api/projects(.*)'
]);

export default clerkMiddleware(async (_auth, req) => {
  if (!isProtectedRoute(req)) return
  const auth = _auth()
  auth.protect();

  const userId = auth.userId!
  if (!userId) throw new Error('Missing user')
  const user = await getUserFromServer(userId, req)
  if (!user) throw new Error('User does not exist')
});


async function getUserFromServer(userId: string, req: NextRequest): Promise<User | null> {
  try {
    const cachedUser: User | undefined = cache.get(userId)
    if (cachedUser) return cachedUser;
    const foundUser = await fetchUserFromServer(req)
    if (!foundUser) return null
    cache.set(userId, foundUser);
    return foundUser
  } catch (error) {
    console.error(error)
    return null
  }
}
async function fetchUserFromServer(req: NextRequest): Promise<User | null> {
  const resData = await fetch(`${req.nextUrl.origin}/api/profile`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Cookie: req.headers.get('cookie')!
    }
  })
  const { data } = await resData.json()
  if (!data) return null
  return data
}


export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
