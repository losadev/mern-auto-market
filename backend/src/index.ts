import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import vehicleRouter from "./routes/vehicleRoutes";
import { connectDB } from "./config/db";
import userRouter from "./routes/userRoutes";
import session from "express-session";
import passport from "./config/passportConfig";

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

app.use("/api/vehicles", vehicleRouter);
app.use("/api/register", userRouter);
app.post("/api/login", (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate(
    "local",
    (
      err: Error | null,
      user: Express.User | false,
      info: { message: string }
    ) => {
      if (err)
        return res.status(500).json({ success: false, message: err.message });
      if (!user)
        return res.status(401).json({ success: false, message: info.message });
      req.logIn(user, (loginErr) => {
        if (loginErr) {
          return res
            .status(500)
            .json({ success: false, message: loginErr.message });
        }
        res.json({ success: true, message: "Logged in successfully", user });
      });
    }
  )(req, res, next);
});
app.post("/api/logout", (req: Request, res: Response, next: NextFunction) => {
  req.logOut((error) => {
    if (error) return next(error);
    res.json({ success: true, message: "Logged out succesfully" });
  });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on http://localhost:${PORT}/`);
});
