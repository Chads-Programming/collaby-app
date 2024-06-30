import { NextHandler } from "@/types";
import { getAuth } from "@clerk/nextjs/server";
<<<<<<< HEAD
import { type NextApiHandler } from "next";
=======
>>>>>>> df80bc9 (feat: api handler update)
import { NextResponse } from "next/server";

export const userMiddleware = (handler: NextHandler) => (...props: Parameters<NextHandler>) => {
  const { userId } = getAuth(props[0]);

  if (!userId)
    return NextResponse.json(
      {
        message: "User does not exist",
      },
      {
        status: 401,
      },
    );

  return handler(...props);
};
