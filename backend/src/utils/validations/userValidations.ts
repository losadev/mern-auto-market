import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const userValidations = [
  body("email").isEmail().notEmpty(),
  body("password").isStrongPassword().notEmpty(),
  body("firstName").isString().notEmpty().isLength({ min: 2, max: 25 }),
  body("lastName").isString().notEmpty().isLength({ min: 2, max: 25 }),
  body("phoneNumber").isNumeric().notEmpty().isLength({ min: 6, max: 9 }),
  body("role").notEmpty().contains("USER"),
  body("address").notEmpty().isString(),
  body("location").notEmpty().isString(),
];

export const validationsResult = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};
