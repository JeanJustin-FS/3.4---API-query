import Horsepower from "../models/horsepowers.js";
import asyncHandler from "../middleware/asyncHandler.js";

let horsepowers = [];

//get all horsepowers
export const getAllHorsepowers = asyncHandler(async (req, res) => {
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

  query = horsepower.find(JSON.parse(queryString)).select("make model year horsepower");

  if (req.query.select) {
    const fields = req.query.select.split(",").join(" ");
    console.log(fields);
    query = select(fields);
  }
  const horepowers = await query;

  res.status(200).json({
    message: "Get all successful",
    data: horepowers,
    success: true,
  });
});

//get horsepower by id
export const getHorsepowerById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const horsepower = await Horsepower.findById(id, req.body, { new: true });
  console.log("ID is:", id);

  res.status(200).json({
    message: "Get by ID successful",
    data: horsepower,
    success: true,
  });
});

//post a new car
export const createHorsepower = asyncHandler(async (req, res, next) => {
  const data = req.body;
  console.log("New Horsepower...", data);

  res.status(201).json({
    success: true,
    message: "Horsepower created successfully",
    data: data,
  });
});

//update car by id
export const updateHorsepowerById = asyncHandler(async (req, res) => {
  const { id } = req.params.id;
  const horsepower = await Horsepower.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  console.log("ID is:", id);

  res.status(200).json({
    message: "Update successful",
    id: id,
    data: horsepower,
    success: true,
  });
});

//delete car by id
export const deleteHorsepowerById = asyncHandler(async (req, res) => {
  const { id } = req.params.id;
  const horsepower = await horsepowers.findByIdAndDelete(id);
  console.log("ID is:", id);

  res.status(200).json({
    message: "Delete successful",
    id: id,
    data: horsepower,
    success: true,
  });
});

export default {
  getAllHorsepowers,
  getHorsepowerById,
  createHorsepower,
  updateHorsepowerById,
  deleteHorsepowerById,
};

// let queryString = JSON.stringify(req.query);
// queryString = queryString.replace(/\b(gt|lt|gte|lte)\b/g, match => `$${match}`);

// let query = horsepowers.find(JSON.parse(queryString));

// const reqQuery = req.query;
// const removeFields = ["select", "sort", "page", "limit"];
// removeFields.forEach(param => delete reqQuery[param]);

// if (req.query.select) {
//   const feilds = req.query.select.split(",").join(" ");
//   query = Horsepowers.find({}).select(feilds);
// }

// if (req.query.sort) {
//   const sortBy = req.query.sort.split(",").join(" ");
//   query = Horsepowers.find({}).sort(sortBy);
// }

// // Pagination
// query = Horsepowers.find({});
// const page = parseInt(req.query.page) || 1;
// const limit = parseInt(req.query.limit) || 2;
// const skip = (page - 1) * limit;

// query = query.skip(skip).limit(limit);
