import { useNavigate } from "react-router-dom";
import "./Landing.css";
const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-container">
      {/* <div className="content-container"> */}
      <button onClick={() => navigate("/home")}>
        Welcome to my countries app
      </button>
      {/* </div> */}
    </div>
  );
};

export default Landing;
