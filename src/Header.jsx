import "./css/Header.css";
const Header = ({ id, themeclass }) => {
  return (
    <header>
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
