import { Schema, model } from "mongoose";

const sweetSchema = new Schema(
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

export const Sweet = model("sweet", sweetSchema);
