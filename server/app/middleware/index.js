import morgan from "morgan";
import { json, urlencoded } from "express";
import cors from "cors";
import express from "express";

const middleware = app => {
  // Middleware
  app.use(cors()); //cors
  app.set("trust proxy", 1); // trust first proxy
  app.use(json()); //req.body
  app.use(urlencoded({ extended: true })); //req.body
  app.use(morgan("dev")); //logger
  app.use(express.json());
};

export default middleware;
