import { z } from "zod";

export const personalInfoSchema =
  z.object({
    fullName: z
      .string()
      .min(3, "Full name is required"),

    email: z
      .string()
      .email("Invalid email address"),

    phone: z
      .string()
      .min(10, "Phone number must be 10 digits")
      .max(10, "Phone number must be 10 digits"),

    dob: z
      .string()
      .min(1, "Date of birth is required"),

    gender: z
      .string()
      .min(1, "Please select gender"),

    maritalStatus: z
      .string()
      .min(
        1,
        "Please select marital status"
      ),
  });