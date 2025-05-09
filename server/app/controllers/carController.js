import Car from "../models/cars.js";
import asyncHandler from "../middleware/asyncHandler.js";

let cars = [];

//get all cars
export const getAllCars = asyncHandler(async (req, res) => {
  let query;
  const reqQuery = { ...req.query };
  const removeFields = ["select"];

  removeFields.forEach(param => {
    delete reqQuery[param];
  });

  let queryString = JSON.stringify(reqQuery);
  queryString = queryString.replace(/\b(gt|lt|gte|lte|in)\b/, match => {
    return `$${match}`;
  });

  console.log(queryString);

  query = Car.find(JSON.parse(queryString)).select("make model year horsepower");

  if (req.query.select) {
    const fields = req.query.select.split(",").join(" ");
    console.log(fields);
    query = select(fields);
  }
  const cars = await query;

  res.status(200).json({
    message: "Get all successful",
    data: cars,
    success: true,
  });
});

//get car by id
export const getCarById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const car = await Car.findById(id, req.body, { new: true });
  console.log("ID is:", id);

  res.status(200).json({
    message: "Get by ID successful",
    data: car,
    success: true,
  });
});

//post a new car
export const createCar = asyncHandler(async (req, res) => {
  const data = req.body;
  console.log("New Car...", data);

  res.status(201).json({
    success: true,
    message: "Car created successfully",
    data: data,
  });
});

//update car by id
export const updateCarById = asyncHandler(async (req, res) => {
  const { id } = req.params.id;
  const car = await Car.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
  console.log("ID is:", id);

  res.status(200).json({
    message: "Update successful",
    data: car,
    success: true,
  });
});

//delete car by id
export const deleteCarById = asyncHandler(async (req, res) => {
  const { id } = req.params.id;
  const car = await Car.findByIdAndDelete(id);
  console.log("ID is:", id);

  res.status(200).json({
    message: "Delete successful",
    data: car,
    success: true,
  });
});
//get car by horsepower

export default { getAllCars, getCarById, createCar, updateCarById, deleteCarById };

// let queryString = JSON.stringify(req.query);
// queryString = queryString.replace(/\b(gt|lt|gte|lte)\b/g, match => `$${match}`);

// let query = Cars.find(JSON.parse(queryString));

// const reqQuery = req.query;
// const removeFields = ["select", "sort", "page", "limit"];
// removeFields.forEach(param => delete reqQuery[param]);

// if (req.query.select) {
//   const feilds = req.query.select.split(",").join(" ");
//   query = Cars.find({}).select(feilds);
// }

// if (req.query.sort) {
//   const sortBy = req.query.sort.split(",").join(" ");
//   query = Cars.find({}).sort(sortBy);
// }

// // Pagination
// query = Cars.find({});
// const page = parseInt(req.query.page) || 1;
// const limit = parseInt(req.query.limit) || 2;
// const skip = (page - 1) * limit;

// query = query.skip(skip).limit(limit);
