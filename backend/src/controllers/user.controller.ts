import { Request, Response } from "express";
import { IUser } from "../types/userTypes";
import User from "../models/user.model";
import bcrypt from "bcryptjs";

export const createUser = async (req: Request, res: Response) => {
  const user: IUser = req.body;
  const newUser = new User(user);
  const query = User.where({ email: newUser.email });

  if (await query.findOne()) {
    res
      .status(401)
      .json({ success: false, message: "User already registered" });
  }
  try {
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashedPassword;
    await User.create(newUser);
    res
      .status(201)
      .json({ success: true, message: "User succesfully registered" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Internal Error" });
  }
};
