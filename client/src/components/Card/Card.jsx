import React from "react";

const Card = ({ country }) => {
  return (
    <div>
      <div>
        <img src={country.flagImage} alt="Flag" />
        <div>
          <h2>{country.name}</h2>
          <p>Continent: {country.continent}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
