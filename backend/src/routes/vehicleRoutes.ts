import { Router } from "express";
import {
  createVehicle,
  deleteVehicle,
  getVehicles,
  updateVehicle,
} from "../controllers/vehicle.controller";
import { body } from "express-validator";

const router = Router();

router.get("/", getVehicles);

router.post(
  "/",
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
  createVehicle
);

router.put(
  "/:id",
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
  updateVehicle
);

router.delete("/:id", deleteVehicle);

export default router;
