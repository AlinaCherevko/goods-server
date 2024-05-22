import { Schema, model } from "mongoose";

const sweetSchema = new Schema(
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

export const Sweet = model("sweet", sweetSchema);
