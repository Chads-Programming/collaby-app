import { NextRequest } from "next/server";

export type NextHandler = (req: NextRequest, { params }: { params: any }) => any
