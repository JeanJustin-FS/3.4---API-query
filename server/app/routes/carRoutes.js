import express from "express";

const router = express.Router();

import {
  getAllCars,
  getCarById,
  createCar,
  updateCarById,
  deleteCarById,
} from "../controllers/carController.js";

// Get all cars
router.get("/", getAllCars);

// Get cars by id
router.get("/:id", getCarById);

// Post a new car
router.post("/", createCar);

// Update car by id
router.put("/:id", updateCarById);

// Delete car by id
router.delete("/:id", deleteCarById);

export default router;
