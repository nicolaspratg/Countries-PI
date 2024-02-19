// Cards.jsx
import React from "react";
import Card from "../Card"; // Assuming Card component is in the same directory
import "./Cards.css";
import usePagination from "../../Custom Hooks/usePagination"; // custom hook to separate the logic and modularize

const Cards = ({ countries }) => {
  const { currentPage, currentItems, nextPage, prevPage, totalPages } =
    usePagination(countries, 10);

  return (
    <div className="container">
      {currentItems.map((country) => (
        <Card key={country.id} country={country} />
      ))}
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Cards; // Export the Cards component
