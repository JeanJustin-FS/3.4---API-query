import React from "react";
import { deleteCar as deleteCarApi } from "../API/API.js";

export default function Car({ car, onDelete }) {
  const { make, model, year, horsepower, _id } = car;

  const handleDelete = async () => {
    try {
      await deleteCarApi(_id);
      // tell the parent we deleted it
      onDelete(_id);
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="car-card">
      <p>{make}</p>
      <p>{model}</p>
      <p>{year}</p>
      <p>{horsepower}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

// import react from "react";

// function Car({ car }) {
//   const { make, model, year, horsepower, _id } = car;
//   const deleteCar = async () => {
//     await deleteCar(_id);
//   };
//   return (
//     <>
//       <p>{make}</p>
//       <p>{model}</p>
//       <p>{year}</p>
//       <p>{horsepower}</p>
//       <button onClick={deleteCar}>Delete</button>
//     </>
//   );
// }

// export default Car;
