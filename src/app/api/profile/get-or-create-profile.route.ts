import findOrCreateProfile from "@/server/profile/find-or-create-profile";
import { NextHandler } from "@/types"
import { currentUser, User } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

const getOrCreateProfileHandler: NextHandler = async () => {
  try {
    const user = await currentUser()
    if (!user) throw new Error('Clerk User does not exist')
    const prismaUser = await findOrCreateProfile(user)

    return NextResponse.json({
      message: "Project Created",
      data: prismaUser,
    });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({
      message: "Error while creating Project",
    });
  }
};
export default getOrCreateProfileHandler
