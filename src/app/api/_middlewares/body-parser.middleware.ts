import type { NextHandler } from "@/types";

export const bodyParserMiddleware = (handler: NextHandler): NextHandler => async (req, { params }) => {
  try {
    const body = await req.json();
    (req as any).body = body;
  } catch (error) {

  }
  return handler(req, { params });
};
