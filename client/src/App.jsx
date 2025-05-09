import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CarList from "./components/CarList";
import API from "./API/API.js";
import "./App.css";

export default function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    API.fetchCars().then(setCars).catch(console.error);
  }, []);

  const handleSearch = async term => {
    const all = await API.fetchCars();
    setCars(
      all.filter(
        c =>
          c.make.toLowerCase().includes(term.toLowerCase()) ||
          c.model.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  // Remove the deleted car from state
  const handleDelete = id => {
    setCars(prev => prev.filter(c => c._id !== id));
  };

  return (
    <div className="app-container">
      <h1>JMJ Motor Sports</h1>
      <SearchBar onSearch={handleSearch} />
      <CarList cars={cars} onDelete={handleDelete} />
    </div>
  );
}

// import { useState } from "react";
// import SearchBar from "./components/SearchBar";
// import CarList from "./components/CarList.jsx";
// import API from "./API/API.js";
// import "./App.css";

// function App() {
//   const [cars, setCars] = useState([]);
//   const handleSearch = async evt => {
//     evt.preventDefault();
//     console.log("Search button clicked!", evt.target.search.value);
//     const fetchedCars = await API.fetchCars();
//     console.log("From the API", fetchedCars);
//     setCars(fetchedCars);
//   };

//   return (
//     <>
//       <h1>JMJ Motor Sports</h1>
//       <SearchBar onSubmit={handleSearch} />
//       {cars.length > 0 && <CarList cars={cars} />}
//     </>
//   );
// }
