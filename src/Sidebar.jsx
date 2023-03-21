import "./css/Sidebar.css";
import { AiOutlineClose } from "react-icons/ai";
import SidebarList from "./components/SidebarList";
const Sidebar = ({ handleOpenCloseNav, sectionsdata, handleOpenSections }) => {
  return (
    <div className="sidebar" id="close">
      <div className="closeicon">
        <AiOutlineClose onClick={handleOpenCloseNav} />
      </div>
      <nav id="menu">
        <button className="home" onClick={() => handleOpenSections("Home")}>
          Home
        </button>
        {sectionsdata.map((section, index) => {
          return (
            <SidebarList
              key={`sidebutton_${index}`}
              section={section}
              handleOpenSections={handleOpenSections}
            />
          );
        })}
      </nav>
    </div>
  );
};
export default Sidebar;
