import { Router, Request, Response } from "express";
import { IVehicle } from "../types/vehicleTypes";
import Vehicle from "../models/vehicle.model";
import mongoose from "mongoose";

const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  try {
    const vehicles = await Vehicle.find({});
    res.status(200).json({ success: true, data: vehicles });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Server internal error" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const vehicle: IVehicle = req.body;

  if (
    !vehicle.make ||
    !vehicle.model ||
    !vehicle.year ||
    !vehicle.price ||
    !vehicle.mileage ||
    !vehicle.fuelType ||
    !vehicle.condition ||
    !vehicle.transmission
  ) {
    res
      .status(400)
      .json({ success: false, message: "Couldn't create a new vehicle" });
  }

  const newVehicle = new Vehicle(vehicle);
  console.log(newVehicle);

  try {
    await newVehicle.save();
    res.status(201).json({ success: true, message: "New vehicle created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Internal Error" });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const vehicle = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ success: false, message: "Invalid product id" });
  }

  try {
    const updateVehicle = await Vehicle.findByIdAndUpdate(id, vehicle, {
      new: true,
    });

    if (!updateVehicle) {
      res.status(404).json({ success: false, message: "Vehicle not found" });
    }

    res.status(200).json({ success: true, data: updateVehicle });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, message: "Invalid product id" });
  }

  try {
    await Vehicle.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Internal Error" });
  }
});

export default router;
