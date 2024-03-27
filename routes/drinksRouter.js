import express from "express";
import { getAllDrinks, getOneDrink } from "../controllers/drinksControllers.js";

const drinksRouter = express.Router();

drinksRouter.get("/", getAllDrinks);

drinksRouter.get("/:id", getOneDrink);

export default drinksRouter;
