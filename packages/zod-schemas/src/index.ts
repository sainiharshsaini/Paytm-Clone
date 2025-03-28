import { z } from "zod";

// Signup Validation Schema
export const signUpSchema = z.object({
    email: z.string().email("Invalid email format"),
    name: z.string().min(2, "Name must be at least 2 characters").max(50),
    number: z.string().min(10, "Number must be 10 digits").max(10, "Number must be 10 digits"),
    password: z.string().min(8, "Password must be at least 8 characters"),
});

// Signin Validation Schema
export const signInSchema = z.object({
    email: z.string().email("Invalid email format").optional(),
    number: z.string().min(10, "Number must be 10 digits").max(10, "Number must be 10 digits"),
    password: z.string().min(8, "Password must be at least 8 characters"),
});