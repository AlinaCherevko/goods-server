import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import mealRouter from "./routes/mealRouter.js";
import drinksRouter from "./routes/drinksRouter.js";
import sweetsRouter from "./routes/sweetsRouter.js";
import ordersRouter from "./routes/ordersRouter.js";

const app = express();

dotenv.config();
const { PORT, DB_HOST } = process.env;

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/meal", mealRouter);
app.use("/drinks", drinksRouter);
app.use("/sweets", sweetsRouter);
app.use("/orders", ordersRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT);
  })
  .catch((error) => {
    console.log(error.message);

    process.exit(1);
  });
