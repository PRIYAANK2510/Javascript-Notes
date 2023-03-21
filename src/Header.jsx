import "./css/Header.css";
import { FaBars } from "react-icons/fa";
const Header = ({ id, themeclass, handleOpenCloseNav }) => {
  return (
    <header>
      <div className="burgericon">
        <FaBars onClick={handleOpenCloseNav} />
      </div>
      <h1>Javascript Notes</h1>
      <button
        id={id}
        className="theme-btn"
        aria-label="Theme"
        role="none"
        onClick={themeclass}
      ></button>
    </header>
  );
};
export default Header;
