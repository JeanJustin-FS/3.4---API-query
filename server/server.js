import dotenv from "dotenv";
import app from "./app/index.js";
import connectDB from "./app/db/config.js";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
