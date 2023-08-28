import { Router } from "express";
import { allGames, gamesbyID } from "../controllers/games.controller.js";
export const gamesRouter = Router();

gamesRouter.get("/", allGames);
gamesRouter.get("/:name", gamesbyID);
