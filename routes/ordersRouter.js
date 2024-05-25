import express from "express";
import { ordersSchema } from "../joiSchemas/joiOrdersSchemas";
import { postOrder } from "../controllers/ordersControllers";
import { isValidId } from "../middlewares/isValidId.js";
import validateBody from "../helpers/validateBody.js";

const ordersRouter = express.Router();

ordersRouter.post("/", validateBody(ordersSchema), postOrder);
ordersRouter.get("/:id", isValidId);

export default ordersRouter;
