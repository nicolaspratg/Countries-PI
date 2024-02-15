import { SearchBar } from "../SearchBar/SearchBar";
import "./Navbar.css";

export const Nav = () => {
  return (
    <div>
      <SearchBar />
      <button>Logout</button>
    </div>
  );
};
