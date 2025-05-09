import React from "react";
import Car from "./Car";

export default function CarList({ cars, onDelete }) {
  return (
    <>
      {cars.map(car => (
        <Car car={car} key={car._id} onDelete={onDelete} />
      ))}
    </>
  );
}

// import Car from "./Car";

// function CarList({ cars }) {
//   return (
//     <>
//       {cars.map(car => (
//         <Car car={car} key={car._id} />
//       ))}
//     </>
//   );
// }
// export default CarList;
