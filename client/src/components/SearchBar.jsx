import React, { useState } from "react";

export default function SearchBar({ onSearch, placeholder = "Search…" }) {
  const [term, setTerm] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(term.trim());
  };

  const handleReset = () => {
    setTerm("");
    onSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={term}
        onChange={e => setTerm(e.target.value)}
        placeholder={placeholder}
        className="search-input"
      />
      <button type="submit" className="btn btn-search">
        Search
      </button>
      <button type="button" onClick={handleReset} className="btn btn-reset">
        Reset
      </button>
    </form>
  );
}

// import React, { useState } from "react";

// function SearchBar({ onSubmit }) {
//   const [term, setTerm] = useState("");

//   const handleChange = event => {
//     console.log(event.target.value, "event.target.value");
//     setTerm(event.target.value);
//   };

//   return (
//     <>
//       <h3>Motor Search</h3>
//       <form onSubmit={onSubmit}>
//         <label htmlFor="search">Search:</label>
//         <input
//           type="text"
//           id="search"
//           name="search"
//           value={term}
//           onChange={handleChange}
//           placeholder="Search..."
//         />

//         {term.length < 3 && <p>Search term must be at least 3 characters long</p>}
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }
