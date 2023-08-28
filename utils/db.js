import { mongoose } from "mongoose";

export const connect = async (DB_URL) => {
  try {
    const db = await mongoose.connect(DB_URL);
    const { name, host } = db.connection;

    console.log(`Connectado a ${name} DB en ${host}`);
  } catch (error) {
    console.log("Error conectando a nuestra BBDD", error);
  }
};
