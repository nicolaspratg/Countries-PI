import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

function formatNumber(number) {
  return number
    ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    : "N/A";
}

const Detail = () => {
  const { id } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/countries/id/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCountry(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching country:", error);
        setCountry({});
      });
  }, [id]);

  return (
    <div className="detailBody">
      <div>
        <h1>{country.name}</h1>
        <h2>ID: {country.id}</h2>
        {country.flagImage && (
          <img src={country.flagImage} alt={country.name} />
        )}
        <h2>Capital: {country.capital} </h2>
        <h2>Continent: {country.continent} </h2>
        <h2>
          Subregion:{" "}
          {country.subregion === "No subregion has been specified"
            ? "No subregion has been specified"
            : country.subregion}
        </h2>
        <h2>
          Area:{" "}
          {formatNumber(
            country.area === null
              ? "No area has been specified"
              : `${country.area}km²`
          )}
        </h2>
        <h2>Population: {formatNumber(country.population)} </h2>
      </div>
    </div>
  );
};

export default Detail;
