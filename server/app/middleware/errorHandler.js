import mongoose from "mongoose";
import ErrorResponse from "../utils/ErrorResponse.js";

const errorHandler = (err, req, res, next) => {
  console.log("Errors Caught");
  console.error(err);

  let error = { ...err };

  if (err.code === 11000) {
    const message = `Item is already exists`;
    error = new ErrorResponse(message, 404);
  }

  if (err.name === "CastError") {
    const message = `Item not found with the id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map(val => val.message);
    console.log(message);
    error = new ErrorResponse(message, 404);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

export default errorHandler;
