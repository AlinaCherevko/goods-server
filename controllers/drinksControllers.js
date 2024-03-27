import { controllersWrapper } from "../decorators/controllersWrapper.js";
import { Drink } from "../schemas/drinkSchemas.js";
import HttpError from "../helpers/HttpError.js";

export const getAllDrinks = controllersWrapper(async (req, res, next) => {
  const result = await Drink.find();
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
});

export const getOneDrink = (req, res) => {};
