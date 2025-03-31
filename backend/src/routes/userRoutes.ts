import { Router } from "express";
import { createUser } from "../controllers/user.controller";
import {
  userValidations,
  validationsResult,
} from "../utils/validations/userValidations";

const router = Router();

router.post("/", ...userValidations, validationsResult, createUser);

export default router;
