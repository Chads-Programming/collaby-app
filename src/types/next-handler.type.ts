import { type NextRequest } from "next/server";

export type NextHandler = (
  req: NextRequest,
  { params }: { params: Params },
) => unknown;

interface Params {
  id: string;
}
