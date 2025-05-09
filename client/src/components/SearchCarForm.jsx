// src/components/CarSearch.jsx
import React, { useState } from "react";

export default function CarSearch({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "1rem 0" }}>
      <input
        type="text"
        placeholder="Search by make or model…"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

// import { useState } from "react";

// function CarSearchForm({ onSubmit }) {
//   const [formData, setFormData] = useState({
//     make: "",
//     model: "",
//     year: "",
//     horsepower: "",
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   const resetForm = () => {
//     setFormData({
//       make: "",
//       model: "",
//       year: "",
//       horsepower: "",
//     });
//     // Also trigger search with empty params to show all cars
//     onSearch({
//       make: "",
//       model: "",
//       year: "",
//       horsepower: "",
//     });
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mb-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Search Cars</h2>

//       <div className="space-y-4" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="make" className="block text-sm font-medium text-gray-700">
//             Make
//           </label>
//           <input
//             type="text"
//             id="make"
//             name="make"
//             value={formData.make}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             placeholder="e.g. Toyota"
//           />
//         </div>

//         <div>
//           <label htmlFor="model" className="block text-sm font-medium text-gray-700">
//             Model
//           </label>
//           <input
//             type="text"
//             id="model"
//             name="model"
//             value={formData.model}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             placeholder="e.g. Camry"
//           />
//         </div>

//         <div>
//           <label htmlFor="year" className="block text-sm font-medium text-gray-700">
//             Year
//           </label>
//           <input
//             type="number"
//             id="year"
//             name="year"
//             value={formData.year}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             placeholder="e.g. 2023"
//             min="1900"
//             max="2099"
//           />
//         </div>

//         <div>
//           <label htmlFor="horsepower" className="block text-sm font-medium text-gray-700">
//             Horsepower
//           </label>
//           <input
//             type="number"
//             id="horsepower"
//             name="horsepower"
//             value={formData.horsepower}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             placeholder="e.g. 203"
//             min="0"
//           />
//         </div>

//         <div className="flex space-x-4 pt-2">
//           <button
//             onClick={handleSubmit}
//             className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//             Search
//           </button>

//           <button
//             type="button"
//             onClick={resetForm}
//             className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//             Reset
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CarSearchForm;
