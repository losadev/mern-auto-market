import { Router, Request, Response } from "express";
import { IVehicle } from "../types/vehicleTypes";
import Vehicle from "../models/vehicle.model";
import mongoose from "mongoose";
import {
  createVehicle,
  deleteVehicle,
  getVehicles,
  updateVehicle,
} from "../controllers/vehicle.controller";

const router = Router();

router.get("/", getVehicles);

router.post("/", createVehicle);

router.put("/:id", updateVehicle);

router.delete("/:id", deleteVehicle);

export default router;
