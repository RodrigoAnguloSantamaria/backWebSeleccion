/* eslint-disable quotes */
import { Player } from "../models/player.model.js";
import { deleteFile } from "../middlewares/delete.file.js";

export const allPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    return res.status(200).json(players);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Error finding data");
  }
};

export const playerById = async (req, res) => {
  console.log(req.body);
  try {
    const { id } = req.params;
    const player = await Player.findById(id);
    return res.status(200).json(player);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Error finding data");
  }
};
export const postPlayer = async (req, res) => {
  //controlar si req.file y con multer mandar a cloudinary y guardar en variable la url de imagen para newPlayer.image
  console.log(req.body, req.file);

  try {
    await Player.deleteMany({ name: "kkkkkk" });
    const newPlayer = Player(req.body);
    if (req.file) {
      newPlayer.image = req.file.path;
    } else {
      newPlayer.image =
        "https://img.freepik.com/vector-premium/jugador-baloncesto-saltando-ilustracion-vector-pelota-fondo-azul_583131-123.jpg?w=740";
    }
    const createrPlayer = await newPlayer.save();
    return res.status(201).json(createrPlayer);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const putPlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const putPlayer = new Player(req.body);
    putPlayer._id = id;
    if (req.file) {
      const { image } = await Player.findById(id);
      deleteFile(image);

      putPlayer.image = req.file.path;
    }
    console.log(putPlayer);
    const updatedPlayer = await Player.findByIdAndUpdate(id, putPlayer);
    return res.status(200).json(updatedPlayer);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const deletePlayer = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  try {
    const { image } = await Player.findById(id);

    deleteFile(image);
    const deletedPlayer = await Player.deleteOne({ _id: id });

    return res.status(200).json(deletedPlayer);
  } catch (error) {
    return res.status(500).json(error);
  }
};
