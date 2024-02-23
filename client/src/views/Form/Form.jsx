import { NavLink } from "react-router-dom";
import ActivityForm from "../../components/Activity Form/Activity Form";

const Form = () => {
  return (
    <div>
      <h1>Create Tourist Activity</h1>
      <ActivityForm />
      <h3>OR</h3>
      <NavLink to="/activities">
        <button>See created activities</button>
      </NavLink>
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>
    </div>
  );
};

export default Form;
