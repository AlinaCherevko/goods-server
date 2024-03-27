import { controllersWrapper } from "../decorators/controllersWrapper.js";
import { Sweet } from "../schemas/sweetSchemas.js";
import HttpError from "../helpers/HttpError.js";

export const getAllSweets = controllersWrapper(async (req, res, next) => {
  const result = await Sweet.find();

  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
});

export const getOneSweet = (req, res) => {};
