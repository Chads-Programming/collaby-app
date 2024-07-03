import type { NextRequest } from "next/server";

export type NextHandler = (
  req: NextRequest,
  { params }: { params: Params },
  // biome-ignore lint/suspicious/noConfusingVoidType: <explanation>
) => void | Response | Promise<void | Response>;

interface Params {
  id: string;
}
