import express from "express";
import { getAllDrinks, getOneDrink } from "../controllers/drinksControllers.js";
import { isValidId } from "../middlewares/isValidId.js";

const drinksRouter = express.Router();

drinksRouter.get("/", getAllDrinks);

drinksRouter.get("/:id", isValidId, getOneDrink);

export default drinksRouter;
