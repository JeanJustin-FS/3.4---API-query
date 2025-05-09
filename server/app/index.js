import express from "express";
import middleware from "./middleware/index.js";
import routes from "./routes/index.js";
import errorHandler from "./middleware/errorHandler.js";
import catchAllHandler from "./middleware/catchAllHandler.js";

const app = express();
middleware(app); // Middleware
app.use("/api/v1", routes); // Routes
app.use(catchAllHandler); // Catch all handler
app.use(errorHandler); // Error handler

export default app;
