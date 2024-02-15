// Cards.jsx
import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card"; // Assuming Card component is in the same directory
import "./Cards.css";

const Cards = () => {
  const countries = useSelector((state) => state.allCountries); // Assuming allCountries is the slice of state containing countries

  return (
    <div className="container">
      {countries.map((country) => (
        <Card key={country.id} country={country} />
      ))}
    </div>
  );
};

export default Cards; // Export the Cards component
