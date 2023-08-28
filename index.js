/* eslint-disable semi */
/* eslint-disable quotes */
import express from "express";
import { gamesRouter } from "./routes/games.routes.js";
import { connect } from "./utils/db.js";
import "dotenv/config.js";
import { configDotenv } from "dotenv";
import { playersRouter } from "./routes/players.routes.js";
import cors from "cors";
import { ApiConfig } from "./utils/configs.js";
import cloudinary from "cloudinary";
//cloudinary config con importacion de data de configs.js

cloudinary.config(ApiConfig.cloudinaryConfig());

const app = express();
configDotenv();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Method", "POST, GET, PUT, DELETE, PATCH"); //Decimos que metodos tenemos permitidos
  res.header("Access-Control-Allow-Credentials", "true"); //permitimos la conexión con credenciales(Bearer token)
  res.header("Access-Control-Allow-Headers", "Content-Type"); // permitimos los headers del tipo Content-Type
  next();
});
app.use(
  cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = [
        "http://localhost:4200",
        "http://localhost:1234",
        "https://movies.com",
        "https://midu.dev",
      ];

      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }

      if (!origin) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  })
);

const PORT = process.env.PORT || 1232;
const DB_URL = process.env.DB_URL;
connect(DB_URL);
app.disable("x-powered-by");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use("/player", playersRouter);

app.use("/games", gamesRouter);

app.use("/", (req, res) => {
  res.send("<h2>ESTAS EN LA / DE LA APP</h2>");
});

// SERVER STARTS LISTEN
app.listen(PORT, () => {
  console.log(`servidor en http://localhost:${PORT}`);
});
