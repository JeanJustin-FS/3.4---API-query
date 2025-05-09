import express from "express";

const router = express.Router();

import carRoutes from "./carRoutes.js";
import horsepowerRoutes from "./horsepowerRoutes.js";

//localhost: 3000/api/v1
router.get("/", (req, res) => {
  res.status(200).json({ success: true, message: `${req.method} - Request Made` });
});

//localhost: 3000/api/v1/cars
router.use("/cars", carRoutes);
//localhost: 3000/api/v1/horsepower
router.use("/horsepowers", horsepowerRoutes);

export default router;
