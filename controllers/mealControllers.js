import { controllersWrapper } from "../decorators/controllersWrapper.js";
import { Meal } from "../schemas/mealSchemas.js";
import HttpError from "../helpers/HttpError.js";

export const getAllMeal = controllersWrapper(async (req, res, next) => {
  const results = await Meal.find();
  if (!results) {
    throw HttpError(404);
  }
  res.json(results);
});

export const getOneGood = controllersWrapper(async (req, res) => {
  const { id } = req.params;
  const result = await Meal.findById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
});
