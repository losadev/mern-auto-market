import {
  ConditionType,
  FuelType,
  TransmissionType,
} from "../utils/enums/vehicle.enum";

export interface IVehicle {
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
