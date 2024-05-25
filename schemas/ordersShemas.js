import { Schema, model } from "mongoose";

const ordersSchema = new Shema({
  items: {
    type: Array,
  },
  totalAmount: {
    type: Number,
  },
  date: {
    type: String,
  },
});

export const Orders = model("order", ordersSchema);
