import express from "express";
import { getAllSweets, getOneSweet } from "../controllers/sweetsControllers.js";
import { isValidId } from "../middlewares/isValidId.js";

const sweetsRouter = express.Router();

sweetsRouter.get("/", getAllSweets);

sweetsRouter.get("/:id", isValidId, getOneSweet);

export default sweetsRouter;
