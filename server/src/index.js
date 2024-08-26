import { app } from "./app.js";
import { connectDB } from "./db/index.js";

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`server is running at port: ${PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.error("MONGO DB Connection Failed!! ", error);
  });
