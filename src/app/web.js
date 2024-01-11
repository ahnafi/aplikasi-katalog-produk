import express from "express";
import bodyParser from "body-parser";
import mustache from "mustache-express";

export const app = express();

// mustache
app.engine("mustache", mustache());
app.set("view engine", "mustache");
app.set("views", "src/views");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("/public"));
// app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.render("index", {
    title: "slebew",
  });
});

// error
