/* eslint-disable quotes */
import mongoose, { Model, Schema } from "mongoose";

const playerModel = new Schema({
  name: {
    type: String,
    min: [3, "At least 3 characters"],
    required: [true, "Name required"],
  },
  lastname: {
    type: String,
    min: [3, "At least 3 characters"],
    required: [true, "Lastname required"],
  },
  height: {
    type: Number,
    min: [2, "Height at least 100 cms"],
    required: [true, "Height required"],
  },
  alias: {
    type: String,
    required: false,
  },
  dorsal: {
    type: Number,
    required: false,
  },
  age: {
    type: Number,
    min: [18, "At least 18 years"],
    required: false,
  },
  team: {
    type: String,
    min: [3, "At least 3 characters"],
    required: false,
  },
  position: {
    type: String,
    enum: [
      "Point Guard",
      "Point Forward",
      "Small Forward",
      "Power Forward",
      "Center",
    ],
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});

export const Player = mongoose.model("player", playerModel);
