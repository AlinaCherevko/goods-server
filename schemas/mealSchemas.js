import { Schema, model } from "mongoose";

const mealSchema = new Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { versionKey: false, timestamps: true }
);

export const Meal = model("meal", mealSchema);
