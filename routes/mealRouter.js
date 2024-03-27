import express from "express";
import { getAllMeal, getOneGood } from "../controllers/mealControllers.js";

const mealRouter = express.Router();

mealRouter.get("/", getAllMeal);

mealRouter.get("/:id", getOneGood);

export default mealRouter;
