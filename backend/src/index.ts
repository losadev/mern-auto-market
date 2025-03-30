import express from "express";
import dotenv from "dotenv";
import vehicleRouter from "./routes/vehicleRoutes";
import { connectDB } from "./config/db";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/vehicles", vehicleRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on http://localhost:${PORT}/`);
});
