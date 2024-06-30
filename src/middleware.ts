import { clerkMiddleware, createRouteMatcher, currentUser, getAuth, User, auth as pepin } from "@clerk/nextjs/server";
import { prisma } from "./lib/prisma";
import { NextRequest } from "next/server";
import NodeCache from "node-cache";
import { env } from "./env";
import { type unsafe_clerk_user } from "./types/clerk-user.type";

const cache = new NodeCache({
  stdTTL: 600,
});

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/api/projects(.*)'
]);

export default clerkMiddleware(async (_auth, req) => {
  if (!isProtectedRoute(req)) return
  const auth = _auth()
  auth.protect();

  // const userId = auth.userId!
  // if (!userId) throw new Error('Missing user')
  // const clerkUser = await getUserFromClerk(userId, env.CLERK_SECRET_KEY!);
  // console.log(JSON.stringify({ clerkUser }, null, 2))
  // if (!clerkUser) throw new Error('nashe')
  // const user = await getUserFromServer(clerkUser)
  // console.log({ user })
});


async function getUserFromServer(user: unsafe_clerk_user): Promise<unsafe_clerk_user | null> {
  try {
    const cachedUser: unsafe_clerk_user | undefined = cache.get(user.id)
    console.log({ cachedUser })
    if (cachedUser) return cachedUser;
    const foundUser = await findByOauthId(user.id)
    console.log({ foundUser })
    if (!foundUser?.id) {
      console.log(JSON.stringify({ user }, null, 4))
      await createOrUpdateUser(user)
    };
    console.log('hereee :V')
    cache.set(user.id, user);
    return user
  } catch (error) {
    console.error(error)
    return null
  }
}

async function getUserFromClerk(userId: string, token: string): Promise<unsafe_clerk_user | null> {
  try {
    const res = await fetch(`https://api.clerk.com/v1/users/${userId}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    const data = await res.json() as unsafe_clerk_user
    if (!data) throw new Error()
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

async function createOrUpdateUser(user: unsafe_clerk_user) {
  const name = [user.first_name, user.last_name].filter(Boolean).join(' ') || user.username || 'Default'
  const email = user.email_addresses.find(Boolean)!.email_address
  const image = user.profile_image_url
  await prisma.user.create({
    data: {
      oauthId: user.id,
      name,
      email,
      image
    }
  })
}
async function findByOauthId(oauthId: string) {
  return await prisma.user.findUnique({
    where: {
      oauthId
    }
  })
}


export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
