import mongoose from "mongoose";
import { DATABASE_NAME } from "../constant.js";

export async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DATABASE_NAME}`
    );

    console.log(
      `\nMONGODB CONNECTED!! DB HOST: ${connectionInstance.connection.host}.`
    );
  } catch (error) {
    console.log("MONGODB CONNECTION FAILED: ", error);
    process.exit(1);
  }
}
