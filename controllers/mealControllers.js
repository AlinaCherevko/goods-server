import { controllersWrapper } from "../decorators/controllersWrapper.js";
import { Meal } from "../schemas/mealSchemas.js";
import HttpError from "../helpers/HttpError.js";

export const getAllMeal = controllersWrapper(async (req, res, next) => {
  const result = await Meal.find();
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
});

export const getOneGood = (req, res) => {};
