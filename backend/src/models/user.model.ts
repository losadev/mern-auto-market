import { Schema, model } from "mongoose";
import { UserType } from "../enums/user.enum";
import { IUser } from "../types/userTypes";

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  role: { type: String, enum: Object.values(UserType), required: true },
  address: { type: String, required: true },
  location: { type: String, required: true },
  profilePicture: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isVerified: { type: Boolean, default: false },
  cart: [{ type: Schema.Types.ObjectId, ref: "Vehicle" }],
  purchaseVehicles: [{ type: Schema.Types.ObjectId, ref: "Vehicle" }],
  wishList: [{ type: Schema.Types.ObjectId, ref: "Vehicle" }],
});

const User = model<IUser>("User", userSchema);

export default User;
