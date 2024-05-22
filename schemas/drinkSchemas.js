import { Schema, model } from "mongoose";

const drinkSchema = new Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

export const Drink = model("drink", drinkSchema);
