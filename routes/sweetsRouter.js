import express from "express";
import { getAllSweets, getOneSweet } from "../controllers/sweetsControllers.js";

const sweetsRouter = express.Router();

sweetsRouter.get("/", getAllSweets);

sweetsRouter.get("/:id", getOneSweet);

export default sweetsRouter;
