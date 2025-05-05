const router = require("express").Router();

const {
  getAllHorsepowers,
  getHorsepowerById,
  createHorsepower,
  updateHorsepowerById,
  deleteHorsepowerById,
} = require("../controllers/horsepowerController");

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

module.exports = router;
