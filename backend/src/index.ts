import express, { Request, Response } from "express";
import dotenv from "dotenv";
import vehicleRouter from "./routes/vehicleRoutes";
import { connectDB } from "./config/db";
import userRouter from "./routes/userRoutes";
import session from "express-session";
import passport from "./config/passportConfig";

dotenv.config();
const PORT = process.env.PORT ?? 3000;

const app = express();
app.use(express.json());

app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/vehicles", vehicleRouter);
app.use("/api/register", userRouter);
app.post(
  "/login",
  passport.authenticate("local"),
  (req: Request, res: Response) => {
    res.json({
      success: true,
      message: "Logged in successfully",
      user: req.user,
    });
  }
);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on http://localhost:${PORT}/`);
});
