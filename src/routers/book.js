import express from "express";
import {
  create,
  findAll,
  update,
  findOne,
  remove,
} from "../controllers/bookController.js";
import { authenticate, authorize } from "../middlewares/auth.js";
const bookRouter = express.Router();

bookRouter
  .route("/")
  .get(findAll)
  .post(authenticate, authorize("author"), create);

bookRouter
  .route("/:id")
  .get(findOne)
  .put(authenticate, authorize("author"), update)
  .delete(authenticate, authorize("admin","author"), remove);

export { bookRouter };
