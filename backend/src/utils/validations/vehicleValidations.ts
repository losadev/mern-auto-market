import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

/**
 * @description Validations for vehicle fields. Ensures the incoming request body has valid data.
 *
 * @constant {Array} vehicleValidations
 * @returns {Array} Array of validation rules for vehicle fields.
 */
export const vehicleValidations = [
  /**
   * @description Validates that the 'make' field is not empty.
   */
  body("make").notEmpty().withMessage("Make is required"),

  /**
   * @description Validates that the 'model' field is not empty.
   */
  body("model").notEmpty().withMessage("Model is required"),

  /**
   * @description Validates that the 'year' field is a valid integer between 1900 and the current year.
   */
  body("year")
    .isInt({ min: 1900, max: new Date().getFullYear() })
    .withMessage("Year must be a valid number between 1900 and current year"),

  /**
   * @description Validates that the 'price' field is a positive float number.
   */
  body("price")
    .isFloat({ min: 0 })
    .withMessage("Price must be a positive number"),

  /**
   * @description Validates that the 'mileage' field is a positive integer.
   */
  body("mileage")
    .isInt({ min: 0 })
    .withMessage("Mileage must be a positive integer"),

  /**
   * @description Validates that the 'fuelType' field is not empty.
   */
  body("fuelType").notEmpty().withMessage("Fuel type is required"),

  /**
   * @description Validates that the 'condition' field is not empty.
   */
  body("condition").notEmpty().withMessage("Condition is required"),

  /**
   * @description Validates that the 'transmission' field is not empty.
   */
  body("transmission").notEmpty().withMessage("Transmission is required"),
];

/**
 * @description Middleware function that checks if the validation results are valid.
 * If there are validation errors, it returns a 400 status with the error details.
 * If there are no errors, it moves to the next middleware or controller.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {void}
 */
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
