import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);
  const searchResults = useSelector((state) => state.searchResults);
  const toShow = searchResults.length > 0 ? searchResults : countries;
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);
  return (
    <div>
      <div>
        <p>Home page</p>
        <div>
          <Cards countries={toShow} />
        </div>
      </div>
    </div>
  );
};

export default Home;
