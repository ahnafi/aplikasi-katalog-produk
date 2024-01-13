import { Router } from "express";
export const notFound = Router();

notFound.get("*", (req, res, next) => {
  res.status(404).send("404 site not found");
});
