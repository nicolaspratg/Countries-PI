import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"; // Import CSS file for styling

const Card = ({ country }) => {
  return (
    <Link to={`/detail/${country.id}`} className="card-link">
      <div className="card">
        <div className="card-content">
          <img src={country.flagImage} alt="Flag" className="card-image" />
          <div className="card-text">
            <h2 className="card-title">{country.name}</h2>
            <p className="card-continent">Continent: {country.continent}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
