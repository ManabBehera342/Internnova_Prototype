import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import "express-async-errors"; //runs without try-catch block

import connectDB from "./config/db.js";
import router from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

/* import axios from 'axios' */
dotenv.config();

/* mongo db connection */
connectDB();

/* rest object */
const app = express();

/* middleware to tell server that we are using the json data */
app.use(express.json());

/* middleware cors is used because while two ports backend and frontend are communicating cross origin error can came */
app.use(cors());

/* morgan will say which restapi is hitted and how much time it takes in log */
app.use(morgan("dev"));

/* axios.get() */

app.use("/api/v1/test", router);
app.use("/api/v1/auth", authRoutes);

//validation middleware
app.use(errorMiddleware);

const Port = process.env.PORT || 8081;

app.listen(Port, () => {
  console.log(`server is running on ${Port}`);
});
