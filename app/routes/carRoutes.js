const router = require("express").Router();

const {
  getAllCars,
  getCarById,
  createCar,
  updateCarById,
  deleteCarById,
} = require("../controllers/carController");

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

module.exports = router;
