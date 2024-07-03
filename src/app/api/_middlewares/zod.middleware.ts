import type { NextHandler } from "@/types";
import { NextResponse } from "next/server";
import { Schema, z, ZodError } from "zod";

type SchemaType = "body" | "params" | "search"


type IZodSchemas = Partial<Record<SchemaType, Schema>>

export const zodMiddleware = (handler: NextHandler, schema: IZodSchemas): NextHandler => async (req, { params }) => {
  let body: unknown = req.body;
  try {
    try {
      if (body && schema.body) body = await req.json()
    } catch (error) { }
    const { searchParams } = new URL(req.url)
    const objParams = Object.fromEntries(searchParams.entries())

    const schemaValues: Record<SchemaType, unknown> = {
      body,
      params,
      search: objParams
    }

    Object.entries(schema).forEach(([key, schema]) => validateSchemaType(schema, schemaValues[key as SchemaType]))

  } catch (error: unknown) {
    if (error instanceof ZodError) {
      return NextResponse.json({
        message: "Validation error",
        errors: error.errors,
      }, { status: 400 });
    }
  }

  return handler(req, { params });
};

function validateSchemaType(schema: Schema, value: unknown) {
  schema.parse(value)
}
