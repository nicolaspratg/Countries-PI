import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Import useDispatch hook
import { searchCountry } from "../../redux/actions"; // Import your searchCountry action
import "./SearchBar.css";

export const SearchBar = () => {
  const dispatch = useDispatch(); // Get the dispatch function
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedTerm, setSearchedTerm] = useState(""); // New state to store the searched term

  const handleSearch = (term) => {
    dispatch(searchCountry(term));
    setSearchedTerm(term); // Update the searched term
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm); // Dispatch the searchCountry action with the searchTerm
    setSearchTerm(""); // Clear the input field
  };

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter any country name"
        value={searchTerm}
        onChange={onChange}
      />
      <button type="submit">Search</button>
      {searchedTerm && <h1>Search Results for: {searchedTerm}</h1>}{" "}
    </form>
  );
};
