import express from "express";
import validateBody from "../helpers/validateBody";
import { ordersSchema } from "../joiSchemas/joiOrdersSchemas";
import { postOrder } from "../controllers/ordersControllers";
import { isValidId } from "../middlewares/isValidId.js";

const ordersRouter = express.Router();

ordersRouter.post("/", validateBody(ordersSchema), postOrder);
ordersRouter.get("/:id", isValidId);
