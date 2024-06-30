import { prisma } from "@/lib/prisma"
import { User as ClerkUser } from "@clerk/nextjs/server"
import { User } from '@prisma/client'

export default async function findOrCreateProfile(user: ClerkUser): Promise<User> {
  const foundUser = await findByOauthId(user.id)
  if (foundUser) return foundUser
  return createUserFromClerk(user)
}

async function createUserFromClerk(user: ClerkUser) {
  const name = user.fullName || user.username || 'Default'
  const email = user.emailAddresses.find(Boolean)!.emailAddress
  const image = user.imageUrl
  return await prisma.user.create({
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
