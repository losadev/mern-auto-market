import { Request, Response } from "express";
import { IUser } from "../types/userTypes";
import User from "../models/user.model";

export const createUser = async (req: Request, res: Response) => {
  const user: IUser = req.body;

  const newUser = new User(user);

  if (!User.findOne()) {
  }
  try {
    await User.create(newUser);
    res
      .status(201)
      .json({ success: true, message: "User succesfully registered" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Internal Error" });
  }
};
