const { z } = require("zod");

//create object schema
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { required_error: "Name must be at least 3 characters" })
    .max(50, { required_error: "Name cannot be more than 20 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" })
    .min(3, { required_error: "Name must be at least 3 characters" })
    .max(50, { required_error: "Name cannot be more than 20 characters" }),

  phone: z
    .string({ required_error: "Phone number is required" })
    .min(10, { required_error: "Phone number should be at least 10 digits" }),

  work: z.string({ required_error: "Work" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(8, { required_error: "Password should be at least 8 characters" }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" }),

  password: z.string({ required_error: "Password is required" }),
});

module.exports = { signupSchema, loginSchema };
