import { NextRequest, NextResponse } from "next/server";

export type MiddlewareFunction = (
  req: NextRequest,
) => Promise<NextResponse<any>> | NextResponse<any>;

export const withMiddleware =
  (
    middlewares: MiddlewareFunction[],
    handler: (req: NextRequest) => Promise<any> | void | NextResponse<any>,
  ) =>
  async (req: NextRequest) => {
    if (!middlewares.length) {
      return handler(req);
    }

    for (const middleware of middlewares) {
      const response = await middleware(req);

      if (response.status > 299) {
        return response;
      }
    }

    return handler(req);
  };
