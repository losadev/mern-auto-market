import { Schema, model } from "mongoose";
import {
  ConditionType,
  FuelType,
  TransmissionType,
} from "../enums/vehicle.enum";
import { IVehicle } from "../types/vehicleTypes";

/**
 * @description Schema for the Vehicle model used in the database.
 * It defines the structure of the vehicle documents and enforces validation rules.
 *
 * @typedef {Object} VehicleSchema
 * @property {string} make - The manufacturer of the vehicle.
 * @property {string} model - The model of the vehicle.
 * @property {number} year - The manufacturing year of the vehicle.
 * @property {number} price - The price of the vehicle.
 * @property {number} mileage - The mileage of the vehicle.
 * @property {FuelType} fuelType - The type of fuel the vehicle uses (e.g., Petrol, Diesel).
 * @property {TransmissionType} transmission - The transmission type of the vehicle (e.g., Manual, Automatic).
 * @property {ConditionType} condition - The condition of the vehicle (e.g., New, Used).
 * @property {string} [description] - An optional description of the vehicle.
 * @property {string[]} [images] - An optional array of image URLs for the vehicle.
 * @property {string} [location] - An optional field for the vehicle's location.
 * @property {Date} createdAt - The date and time when the vehicle was created.
 * @property {Date} updatedAt - The date and time when the vehicle was last updated.
 */

/**
 * @description Mongoose schema representing the structure of a vehicle document in the database.
 * This schema defines the fields, validation, and data types for the vehicle collection.
 */
const vehicleSchema = new Schema<IVehicle>({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  mileage: { type: Number, required: true },
  fuelType: {
    type: String,
    enum: Object.values(FuelType),
    required: true,
  },
  transmission: {
    type: String,
    enum: Object.values(TransmissionType),
    required: true,
  },
  condition: {
    type: String,
    enum: Object.values(ConditionType),
    required: true,
  },
  description: { type: String, required: false },
  images: { type: [String], required: false },
  location: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

/**
 * @description Vehicle model based on the vehicle schema. This model interacts with the MongoDB collection
 * and provides methods to query, create, update, and delete vehicle documents.
 */
const Vehicle = model<IVehicle>("Vehicle", vehicleSchema);

export default Vehicle;
