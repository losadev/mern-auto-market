import { Request, Response, Router } from "express";
import {
  createVehicle,
  deleteVehicle,
  getVehicles,
  updateVehicle,
} from "../controllers/vehicle.controller";
import {
  validationsResult,
  vehicleValidations,
} from "../utils/validations/vehicleValidations";

const router = Router();

router.get("/", getVehicles);

router.post("/", ...vehicleValidations, validationsResult, createVehicle);

router.put("/:id", ...vehicleValidations, validationsResult, updateVehicle);

router.delete("/:id", deleteVehicle);

export default router;
