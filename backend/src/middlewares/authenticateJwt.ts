import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { IUser } from "../types/userTypes";
declare global {
  namespace Express {
    interface Request {
      user?: User | undefined;
    }
  }
}

export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // 1. Intentar obtener el token del encabezado 'Authorization'
  const token = req.header("Authorization")?.replace("Bearer ", "");

  // 2. Si no existe un token, devolver una respuesta de error
  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  // 3. Intentar verificar el token
  jwt.verify(token, process.env.SECRET as string, (err, decoded: any) => {
    // 4. Si el token es inválido, devolver una respuesta de error
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // 5. Si el token es válido, adjuntar los datos decodificados (usuario) a `req.user`
    req.user = decoded as IUser;

    // 6. Continuar al siguiente middleware o ruta
    next();
  });
};
