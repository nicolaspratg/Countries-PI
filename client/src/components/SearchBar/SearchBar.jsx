import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountry } from "../../redux/actions";
import "./SearchBar.css";
import { NavLink } from "react-router-dom";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    dispatch(searchCountry(term)); // if hay filtered results dispatch searchFilteredResults (action nuevo) sino busco del back
  };

  const onChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value); // Update the search term state

    // Dispatch the search action with the updated search term
    handleSearch(value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter any country name"
          value={searchTerm}
          onChange={onChange}
        />
      </form>
      <NavLink to="/form">
        <button>Form</button>
      </NavLink>
    </div>
  );
};
