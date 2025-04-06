import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import vehicleRouter from "./routes/vehicleRoutes";
import { connectDB } from "./config/db";
import session from "express-session";
import passport from "./config/passportConfig";
import jwt from "jsonwebtoken";
import { IUser } from "./types/userTypes";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT ?? 3000;
const SECRET = process.env.SECRET;

const app = express();
app.use(express.json());

if (!SECRET) {
  throw new Error("Secret undefined");
}
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

app.use("/api/vehicles", vehicleRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on http://localhost:${PORT}/`);
});
