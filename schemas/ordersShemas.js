import { Schema, model } from "mongoose";

const ordersSchema = new Schema({
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
