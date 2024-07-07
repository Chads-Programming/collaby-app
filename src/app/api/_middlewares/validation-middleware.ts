import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest } from "next/types";
import { z, ZodError, ZodRawShape } from "zod";

export class ValidationError extends Error {
  constructor(private readonly error: Record<string, unknown>) {
    super(JSON.stringify(error));
  }

  toString() {
    return JSON.stringify(this.error, null, 2);
  }

  static fromZodError(error: ZodError<any>) {
    return new ValidationError({
      error,
    });
  }
}

const validateSchema = <T extends ZodRawShape>(
  object: unknown,
  schema: z.ZodObject<T> | z.ZodType,
) => {
  const { error } = schema.safeParse(object);

  if (error) {
    throw ValidationError.fromZodError(error);
  }

  return true;
};

type CommonValidationFunction = (
  req: NextRequest,
  params: any
) => Promise<boolean> | boolean;

interface Options {
  body?: CommonValidationFunction;
  params?: CommonValidationFunction;
  query?: CommonValidationFunction;
}

// generic zod validator pipe for validate a body from request
export const zodBody =
  (schema: z.ZodObject<ZodRawShape>) => async (req: NextRequest) => {
    const data = await req.json();

    console.log(data)

    if (!data) {
      throw new ValidationError({
        error: "Body was not provided",
      });
    }

    return validateSchema(data, schema);
  };

// generic zod validator pipe for validate paths from url
export const zodParams =
  (path: string, schema: z.ZodType) => (req: NextRequest, params: any) => {
    console.log('zodParams', { params })
    return validateSchema(params, schema);
  };

// generic zod validator pipe for validate query string params
export const zodQuery =
  (schema: z.ZodObject<ZodRawShape>) => (req: NextRequest) => {
    const object = Object.fromEntries(new URL(req.url as string).searchParams);

    return validateSchema(object, schema);
  };

export const useValidationMiddleware =
  (options: Options) => async (req: NextRequest, reqParams: any) => {
    const { body, params, query } = options;

    const validations = [params, body, query].filter((val) =>
      Boolean(val),
    ) as CommonValidationFunction[];

    const results = await Promise.allSettled(
      validations.map((validate) => validate(req, reqParams)),
    );

    const errors = results.filter((result) => result.status === "rejected");

    if (errors.length) {
      return NextResponse.json(
        {
          message: "Validation error",
          errors: errors.map((err) => err.reason),
        },
        { status: 400 },
      );
    }

    (req as any).safeData = {
      body,
      params,
      query,
    };

    return NextResponse.next();
  };
