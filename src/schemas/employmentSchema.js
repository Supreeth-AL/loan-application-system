import { z } from "zod";

export const employmentSchema =
  z.object({
    employmentType: z
      .string()
      .min(
        1,
        "Please select employment type"
      ),

    companyName: z
      .string()
      .optional(),

    monthlySalary: z
      .string()
      .optional(),

    businessName: z
      .string()
      .optional(),

    annualIncome: z
      .string()
      .optional(),
  });