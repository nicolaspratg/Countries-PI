import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "../views/Landing/Landing";
import Home from "../views/Home/Home";
import Detail from "../views/Detail/Detail";
import Form from "../views/Form/Form";
import Activities from "../views/Activities/Activities";

export const AppRouter = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
};
