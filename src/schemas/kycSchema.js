import { z } from "zod";

export const kycSchema = z.object({
  panNumber: z
    .string()
    .regex(
      /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
      "Invalid PAN format"
    ),

  aadhaarNumber: z
    .string()
    .regex(
      /^[0-9]{12}$/,
      "Aadhaar must be 12 digits"
    ),
});