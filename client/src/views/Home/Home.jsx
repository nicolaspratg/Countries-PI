import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByContinent, getAllCountries } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);
  const searchResults = useSelector((state) => state.searchResults);
  const filteredResults = useSelector((state) => state.filteredResults);
  const toShow =
    searchResults.length > 0
      ? searchResults
      : filteredResults.length > 0
      ? filteredResults
      : countries;

  // const [filter, setFilter] = useState("");
  // const [order, setOrder] = useState("");
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);
  const handleFilterByContinent = (e) => {
    const value = e.target.value;
    dispatch(filterByContinent(value));
  };

  const handleOrder = (e) => {
    dispatch(handleOrder(e.target.value));
  };
  // const filterActivities = (e) => {
  //   dispatch(filterActivities(e.target.value));
  // };

  const resetFilters = () => {
    dispatch(filterByContinent("All"));
  };
  return (
    <div>
      <div>
        <p>Home page</p>
        <div>
          <select name="order" onChange={handleOrder}>
            <option value="" disabled>
              Select Order
            </option>
            <optgroup label="Country">
              <option value="Country Name">Name ^ A-Z</option>
              <option value="Capital">Capital ^ A-Z</option>
              <option value="Subregion">Subregion ^ A-Z</option>
              <option value="Population">Population ^ 0-ထ</option>
              <option value="Area">Area ^ 0-ထ</option>
            </optgroup>
            {/* <optgroup label="Activity (The first in each country)">
        <option value="Activity Name">Name ^ A-Z</option>
        <option value="Difficulty">Difficulty ^ 1-5</option>
        <option value="Duration">Duration ^ 0-ထ</option>
        <option value="Season">Season ^ A-Z</option>
      </optgroup> */}
          </select>
          <select name="filter" onChange={handleFilterByContinent}>
            <option value="" disabled>
              Select Filter
            </option>
            <optgroup label="Country Continents">
              <option value="All">All</option>
              <option value="Africa">Africa</option>
              <option value="Antarctic">Antarctic</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
              <option value="Americas">America</option>
            </optgroup>
            {/* <optgroup label="Activity Difficults">
          <option value="Difficulty 1">Difficulty 1</option>
          <option value="Difficulty 2">Difficulty 2</option>
          <option value="Difficulty 3">Difficulty 3</option>
          <option value="Difficulty 4">Difficulty 4</option>
          <option value="Difficulty 5">Difficulty 5</option>
        </optgroup>
        <optgroup label="Activity Season">
          <option value="Summer">Summer</option>
          <option value="Autumn">Autumn</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
        </optgroup> */}
          </select>
          <button onClick={resetFilters}>Reset Filters</button>
        </div>
        <div>
          <Cards countries={toShow} />
        </div>
      </div>
    </div>
  );
};

export default Home;
