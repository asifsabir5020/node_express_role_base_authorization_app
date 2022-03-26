import express from "express";
import { create, findAll, update, findOne, remove } from "../controllers/bookController.js";
import { authenticate } from "../middlewares/auth.js";
const bookRouter = express.Router();

bookRouter.route("/")
    .get(findAll)
    .post(authenticate, create);

bookRouter.route("/:id")
    .get(findOne)
    .put(authenticate, update)
    .delete(authenticate, remove);

export { bookRouter };

