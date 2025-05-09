import express from "express";

const router = express.Router();

import {
  getAllHorsepowers,
  getHorsepowerById,
  createHorsepower,
  updateHorsepowerById,
  deleteHorsepowerById,
} from "../controllers/horsepowerController.js";

// Get all horsepowers
router.get("/", getAllHorsepowers);

// Get horsepowers by id
router.get("/:id", getHorsepowerById);

// Post a new horsepower
router.post("/", createHorsepower);

// Update horsepower by id
router.put("/:id", updateHorsepowerById);

// Delete horsepower by id
router.delete("/:id", deleteHorsepowerById);

export default router;
