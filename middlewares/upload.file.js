import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "seleccion",
    allowedFormats: ["jpg", "png", "jpeg", "gif", "webp", "avif"],
  },
});

export const upload = multer({ storage });
