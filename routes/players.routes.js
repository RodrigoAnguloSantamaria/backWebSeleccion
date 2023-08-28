/* eslint-disable quotes */
import { Router } from "express";
import {
  allPlayers,
  playerById,
  postPlayer,
  putPlayer,
  deletePlayer,
} from "../controllers/players.controller.js";
import { upload } from "../middlewares/upload.file.js";

export const playersRouter = Router();

playersRouter.get("/", allPlayers);
playersRouter.get("/:id", playerById);
playersRouter.post("/", upload.single("image"), postPlayer);
playersRouter.put("/:id", upload.single("image"), putPlayer);
playersRouter.delete("/:id", deletePlayer);
