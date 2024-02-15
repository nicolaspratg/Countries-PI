import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "../views/Landing/Landing";
import Home from "../views/Home/Home";
import { Nav } from "../components/Nav/Navbar";



export const AppRouter = () => {
  const location = useLocation();
  const isLanding = location.pathname === "/";
  return (
    <div className="App">
      {!isLanding && <Nav />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/form" element={<Form />} /> */}
        {/* <Route path="/detail/:ID" element={<Detail />} /> */}
        {/* <Route path="/activities" element={<Activities />} /> */}
      </Routes>
    </div>
  );
};