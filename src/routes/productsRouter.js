import express from "express";
import productController from "../controller/product-controller.js";

export const productsRouter = new express.Router();

// products 
productsRouter.get("/", productController.list);
productsRouter.get("/add", productController.viewAdd);
productsRouter.get("/:id", productController.get); 
productsRouter.post("/add", productController.add); 
// productsRouter.put("/", productController.add);
// productsRouter.delete("/", productController.add);
