// import { NextFunction, Request, Response } from "express";

// export const authorizeRole = (role: string) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     if (!req.user || req.user.role !== role) {
//       return res.status(403).json({ message: "Forbidden: Access denied" });
//     }
//     next();
//   };
// };
