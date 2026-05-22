import { z } from "zod";

export const loanDetailsSchema = z.object({
  loanType: z
    .string()
    .min(1, "Please select loan type"),

  loanAmount: z
    .string()
    .min(1, "Loan amount is required"),

  loanTenure: z
    .string()
    .min(1, "Loan tenure is required"),

  interestRate: z
    .string()
    .min(1, "Interest rate is required"),
});