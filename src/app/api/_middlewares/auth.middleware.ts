import type { NextHandler } from "@/types";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// User Middleware
export const userMiddleware =
  (handler: NextHandler): NextHandler =>
  async (req, { params }) => {
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json(
        {
          message: "User does not exist",
        },
        { status: 401 },
      );
    }

    return handler(req, { params });
  };

export const authMiddleware = (req: NextRequest) => {
  const { userId } = getAuth(req);

  if (!Boolean(userId)) {
    return NextResponse.json(
      {
        message: "User does not exist",
      },
      { status: 401 },
    );
  }

  return NextResponse.next();
};
