const SidebarList = ({ section, handleOpenSections }) => {
  return (
    <button className="side_section" onClick={() => handleOpenSections(section.title)}>
      {section.title}
    </button>
  );
};
export default SidebarList;
