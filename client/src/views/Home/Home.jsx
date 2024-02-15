import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);
  return (
    <div>
      <div>
        <p>Home page</p>
        <div>
          <Cards countries={countries} />
        </div>
      </div>
    </div>
  );
};

export default Home;
