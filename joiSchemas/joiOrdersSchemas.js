import Joi from "joi";

export const ordersSchema = Joi.object({
  date: Joi.string().required(),
  items: Joi.array().required(),
  totalAmount: Joi.number().required(),
});
