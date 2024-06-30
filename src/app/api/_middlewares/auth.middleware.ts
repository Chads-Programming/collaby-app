import { getAuth } from "@clerk/nextjs/server";
import { type NextApiHandler } from "next";
import { NextResponse } from "next/server";

export const userMiddleware =
  (handler: NextApiHandler) =>
  (...props: Parameters<NextApiHandler>) => {
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
