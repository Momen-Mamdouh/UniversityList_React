import { z, ZodError } from 'zod';

export const UniversitySchema = z.object({
  name: z.string(),
  country: z.string(),
  domains: z.array(z.string()),
  web_pages: z.array(z.string()),
  alpha_two_code: z.array(z.string())
});

export type University = z.infer<typeof UniversitySchema>;

export type SafeParseResult<T> = {
   success: boolean,
   data?: T,
   error?: ZodError<T>
 }
 