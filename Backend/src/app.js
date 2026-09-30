import express from "express";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/error.middleware.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Use routes
app.use("/api/auth", authRoutes);

app.use(errorHandler);

export default app;
