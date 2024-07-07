import { NextRequest, NextResponse } from "next/server";

export type MiddlewareFunction = (
  req: NextRequest,
  params: any
) => Promise<NextResponse<any>> | NextResponse<any>;

export const withMiddleware =
  (
    middlewares: MiddlewareFunction[],
    handler: (req: NextRequest, params?: any) => void | Response | Promise<void | Response>,
  ) =>
    async (req: NextRequest, params?: any) => {
      if (!middlewares.length) {
        return handler(req, params);
      }

      for (const middleware of middlewares) {
        const response = await middleware(req, params);

        if (response.status > 299) {
          return response;
        }
      }

      return handler(req, params);
    };
