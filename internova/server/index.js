import express from "express";
import cookieParser from "cookie-parser"; //Cookies sent by the client in the Cookie header are parsed into a JavaScript object.
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import recommendationRoute from "./routes/recommendation.route.js";
import candidateRoutes from "./routes/candidateRoutes.js";
dotenv.config({});
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Without this middleware, req.body will not be populated
app.use(cookieParser());

const corsOptions = {
  // a browser will block requests made from a different origin (e.g., a React front-end at http://localhost:3000) to your Express back-end (e.g., http://localhost:5000) unless the server explicitly allows it.
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 4000;

//api's

app.use("/api/v1/user", userRoute); //"http://localhost:4000/api/v1/user/register",
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
app.use("/api/v1/recommendations", recommendationRoute);
app.use("/api/v1/candidates", candidateRoutes);
app.listen(process.env.PORT, () => {
  connectDB(); //database
  console.log(`Server running at port ${PORT}`);
});
