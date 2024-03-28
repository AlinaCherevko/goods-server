import express from "express";
import { getAllMeal, getOneGood } from "../controllers/mealControllers.js";
import { isValidId } from "../middlewares/isValidId.js";

const mealRouter = express.Router();

mealRouter.get("/", getAllMeal);

mealRouter.get("/:id", isValidId, getOneGood);

export default mealRouter;
