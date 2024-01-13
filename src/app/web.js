import express from "express";
import bodyParser from "body-parser";
import mustacheExpress from "mustache-express";
import { productsRouter } from "../routes/productsRouter.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { notFound } from "../middleware/_404.js";

export const app = express();

// mustache
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", "src/views");

// middleware
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use(productsRouter);

// error
app.use(errorMiddleware);
app.use(notFound)