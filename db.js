import mongoose from "mongoose";

const connnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log(`connected to mongoDb Database ${conn.connection.host}`);
  } catch (error) {
    console.error("Error while connecting to DB");
    console.error(error);
  }
};

export default connnectDB;
