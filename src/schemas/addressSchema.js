import { z } from "zod";

export const addressSchema = z.object({
  addressLine: z
    .string()
    .min(5, "Address is required"),

  pinCode: z
    .string()
    .regex(
      /^[0-9]{6}$/,
      "PIN code must be 6 digits"
    ),

  city: z
    .string()
    .min(1, "City is required"),

  state: z
    .string()
    .min(1, "State is required"),
});