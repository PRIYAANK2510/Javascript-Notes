import Body from "./Body";
import Header from "./Header";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useState } from "react";
import { shadesOfPurple } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { atelierCaveLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Sidebar from "./Sidebar";
import { handleOpenCloseNav } from "./service/handleOpenCloseSidebar";
import { sectionsdata } from "./data/data";
import { openSection } from "./service/openSection";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [codestyle, setCodestyle] = useState(shadesOfPurple);
  const [sections, setSections] = useState(sectionsdata);
  const r = document.querySelector(":root");
  let rs = getComputedStyle(r);
  const themeclass = () => {
    if (theme === "dark") {
      setTheme("light");
      setCodestyle(atelierCaveLight);
      r.style.setProperty("--bgcolor100", rs.getPropertyValue("--light-bgcolor100"));
      r.style.setProperty("--boxshadowcolor", rs.getPropertyValue("--light-boxshadowcolor"));
      r.style.setProperty("--bgcolor200", rs.getPropertyValue("--light-bgcolor200"));
      r.style.setProperty("--bgcolor300", rs.getPropertyValue("--light-bgcolor300"));
      r.style.setProperty("--sectioncolor", rs.getPropertyValue("--light-sectioncolor"));
      r.style.setProperty("--primarycolor100", rs.getPropertyValue("--light-primarycolor100"));
      r.style.setProperty("--primarycolor200", rs.getPropertyValue("--light-primarycolor200"));
      r.style.setProperty("--primarycolor300", rs.getPropertyValue("--light-primarycolor300"));
      r.style.setProperty("--textcolor100", rs.getPropertyValue("--light-textcolor100"));
      r.style.setProperty("--textcolor200", rs.getPropertyValue("--light-textcolor200"));
    } else {
      setTheme("dark");
      setCodestyle(shadesOfPurple);
      r.style.setProperty("--bgcolor100", rs.getPropertyValue("--dark-bgcolor100"));
      r.style.setProperty("--boxshadowcolor", rs.getPropertyValue("--dark-boxshadowcolor"));
      r.style.setProperty("--bgcolor200", rs.getPropertyValue("--dark-bgcolor200"));
      r.style.setProperty("--bgcolor300", rs.getPropertyValue("--dark-bgcolor300"));
      r.style.setProperty("--sectioncolor", rs.getPropertyValue("--dark-sectioncolor"));
      r.style.setProperty("--primarycolor100", rs.getPropertyValue("--dark-primarycolor100"));
      r.style.setProperty("--primarycolor200", rs.getPropertyValue("--dark-primarycolor200"));
      r.style.setProperty("--primarycolor300", rs.getPropertyValue("--dark-primarycolor300"));
      r.style.setProperty("--textcolor100", rs.getPropertyValue("--dark-textcolor100"));
      r.style.setProperty("--textcolor200", rs.getPropertyValue("--dark-textcolor200"));
    }
  };
  const handleOpenSections = (title) => {
    if (title.toLowerCase() === "home") {
      setSections(sectionsdata);
    } else {
      setSections(openSection(sectionsdata, title));
    }
    handleOpenCloseNav();
  };

  return (
    <>
      <Header id={theme} themeclass={themeclass} handleOpenCloseNav={handleOpenCloseNav} />
      <Sidebar
        handleOpenCloseNav={handleOpenCloseNav}
        sectionsdata={sectionsdata}
        handleOpenSections={handleOpenSections}
      />
      <Body
        SyntaxHighlighter={SyntaxHighlighter}
        codestyle={codestyle}
        sectionsdata={sectionsdata}
        sections={sections}
        setSections={setSections}
      />
    </>
  );
};
export default App;
