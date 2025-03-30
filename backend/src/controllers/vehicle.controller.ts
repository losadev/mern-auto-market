import { Request, Response } from "express";
import Vehicle from "../models/vehicle.model";
import { IVehicle } from "../types/vehicleTypes";
import mongoose from "mongoose";

/**
 * @description Retrieves all vehicles from the database.
 * @param {Request} _req - The Express request object.
 * @param {Response} res - The Express response object.
 */
export const getVehicles = async (_req: Request, res: Response) => {
  try {
    const vehicles = await Vehicle.find({});
    res.status(200).json({ success: true, data: vehicles });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Server internal error" });
  }
};

/**
 * @description Creates a new vehicle in the database.
 * @param {Request} req - The Express request object containing the vehicle data to be created.
 * @param {Response} res - The Express response object.
 */
export const createVehicle = async (req: Request, res: Response) => {
  const vehicle: IVehicle = req.body;

  const newVehicle = new Vehicle(vehicle);

  try {
    await newVehicle.save();
    res.status(201).json({ success: true, message: "New vehicle created" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Internal Error" });
  }
};

/**
 * @description Updates an existing vehicle in the database.
 * @param {Request} req - The Express request object containing the vehicle data and vehicle id to update.
 * @param {Response} res - The Express response object.
 */
export const updateVehicle = async (req: Request, res: Response) => {
  const { id } = req.params;
  const vehicle = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ success: false, message: "Invalid product id" });
  }

  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(id, vehicle, {
      new: true,
    });

    if (!updatedVehicle) {
      res.status(404).json({ success: false, message: "Vehicle not found" });
    }

    res.status(200).json({ success: true, data: updatedVehicle });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/**
 * @description Deletes a vehicle from the database by its id.
 * @param {Request} req - The Express request object containing the vehicle id to delete.
 * @param {Response} res - The Express response object.
 */
export const deleteVehicle = async (req: Request, res: Response) => {
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
};
