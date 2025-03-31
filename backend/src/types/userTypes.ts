import { UserType } from "../utils/enums/user.enum";
import { IVehicle } from "./vehicleTypes";

export interface IUser {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  role: UserType;
  address: string;
  location: string;
  profilePicture?: string;
  createdAt: Date;
  updatedAt: Date;
  isVerified?: boolean;
  cart?: IVehicle[];
  purchaseVehicles?: IVehicle[];
  wishList?: IVehicle[];
}
