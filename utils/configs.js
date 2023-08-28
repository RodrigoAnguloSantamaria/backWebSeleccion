export class ApiConfig {
  static cloudinaryConfig() {
    const data = {
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_KEY,
      api_secret: process.env.CLOUDINARY_SECRET,
    };
    return data;
  }
}
