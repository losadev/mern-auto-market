import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const vehicleValidations = [
  body("make").notEmpty().withMessage("Make is required"),
  body("model").notEmpty().withMessage("Model is required"),
  body("year")
    .isInt({ min: 1900, max: new Date().getFullYear() })
    .withMessage("Year must be a valid number between 1900 and current year"),
  body("price")
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),
  body("mileage")
    .isInt({ min: 0 })
    .withMessage("Mileage must be a positive integer"),
  body("fuelType").notEmpty().withMessage("Fuel type is required"),
  body("condition").notEmpty().withMessage("Condition is required"),
  body("transmission").notEmpty().withMessage("Transmission is required"),
];

export const validationsResult = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ success: false, errors: errors.array() });
  }
  next(); // Si no hay errores, continúa al siguiente middleware (el controlador)
};
