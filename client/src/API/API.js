const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

async function fetchCars() {
  const res = await fetch(`${API_URL}/api/v1/cars`);
  if (!res.ok) throw new Error("Failed to fetch cars");
  const json = await res.json();
  return json.data || [];
}

async function fetchCarId(id) {
  const res = await fetch(`${API_URL}/api/v1/cars`);
  if (!res.ok) throw new Error("Failed to fetch cars");
  const json = await res.json();
  return json.data || [];
}

async function createCar(car) {
  const res = await fetch(`${API_URL}/api/v1/cars`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(car),
  });
  if (!res.ok) throw new Error("Failed to create car");
  return res.json();
}

async function updateCar(id) {
  const res = await fetch(`${API_URL}/api/v1/cars`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(car),
  });
  if (!res.ok) throw new Error("Failed to create car");
  return res.json();
}

// async function deleteCar(id) {
//   const res = await fetch(`${API_URL}/api/v1/cars/${id}`, {
//     method: "DELETE",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(car),
//   });
//   if (!res.ok) throw new Error("Failed to create car");
//   return res.json();
// }

// src/API/API.js
export async function deleteCar(id) {
  const res = await fetch(`${API_URL}/api/v1/cars/${id}`, {
    method: "DELETE",
  });

  // grab both status and body for debugging
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Status ${res.status}: ${text}`);
  }

  // if your server returns JSON on delete, you can parse it:
  try {
    return JSON.parse(text);
  } catch {
    return { success: true };
  }
}

export default { fetchCars, fetchCarId, createCar, updateCar, deleteCar };

// import axios from "axios";

// const API = {};

// //get cars
// API.fetchCars = async () => {
//   const response = await axios.get("http://localhost:3000/api/v1/cars");
//   console.log(">>>", response.data);
//   return response.data;
// };

// //get car by id
// API.fetchCars = async id => {
//   const response = await axios.get("http://localhost:3000/api/v1/cars");
//   console.log(">>>", response.data);
//   return response.data;
// };

// // //post car
// // API.fetchCars = async () => {
// //   const response = await axios.post("http://localhost:3000/api/v1/cars");
// //   console.log(">>>", response.data);
// //   return response.data;
// // };

// //update car
// // API.fetchCars = async id => {
// //   const response = await axios.put("http://localhost:3000/api/v1/cars");
// //   console.log(">>>", response.data);
// //   return response.data;
// // };

// //delete car
// API.deleteCar = async id => {
//   const response = await axios.delete("http://localhost:3000/api/v1/cars");
//   console.log(">>>", response.data);
//   return response.data;
// };
