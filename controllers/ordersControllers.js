import { controllersWrapper } from "../decorators/controllersWrapper.js";
//import HttpError from "../helpers/HttpError.js";
import { Orders } from "../schemas/ordersShemas.js";

export const postOrder = controllersWrapper(async (req, res) => {
  const data = req.body;
  const result = await Orders.create(data);
  res.status(201).json(result);
});
