import { z } from "zod";

export const coApplicantSchema =
  z.object({
    hasCoApplicant: z.boolean(),

    coApplicantName: z
      .string()
      .optional(),

    relationship: z
      .string()
      .optional(),

    coApplicantIncome: z
      .string()
      .optional(),
  });