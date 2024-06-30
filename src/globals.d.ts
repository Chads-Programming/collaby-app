import { z, ZodType } from "zod";

declare type Infer<T extends ZodType> = z.infer<T>
