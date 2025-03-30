import { Schema, model } from "mongoose";
import {
  ConditionType,
  FuelType,
  TransmissionType,
} from "../enums/vehicle.enum";

interface IVehicle {
  make: string; // Marca del vehículo
  model: string; // Modelo del vehículo
  year: number; // Año de fabricación
  price: number; // Precio del vehículo
  mileage: number; // Kilometraje
  fuelType: FuelType; // Tipo de combustible
  transmission: TransmissionType; // Tipo de transmisión
  condition: ConditionType; // Estado del vehículo
  description?: string; // Descripción detallada del vehículo
  images?: string[]; // URLs de las imágenes
  location?: string; // Ubicación
  createdAt: Date; // Fecha de publicación
  updatedAt: Date; // Fecha de última actualización
}

// Definición del esquema del vehículo con los Enums
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

const Vehicle = model<IVehicle>("Vehicle", vehicleSchema);

export default Vehicle;
