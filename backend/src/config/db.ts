import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongoUri = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    if (!mongoUri) {
      throw new Error("No se pudo conectar a la BD");
    }
    const conn = await mongoose.connect(mongoUri);
    if (conn) {
      console.log("Se ha establecido la conexion con la BD");
    }
  } catch (error: unknown) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};
