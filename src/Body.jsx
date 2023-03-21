import Section from "./components/Section.jsx";
import { useState } from "react";
import { searchService } from "./service/searchService";
import "./css/Body.css";
import { FaSearch } from "react-icons/fa";

const Body = ({ SyntaxHighlighter, codestyle, sectionsdata, sections, setSections }) => {
  const handlekey = (e) => {
    if (e.target.value.length != 0) {
      setSections(searchService(sectionsdata, e.target.value));
    }
    if (e.target.value.length == 0) {
      setSections(sectionsdata);
    }
  };
  return (
    <main
      onClick={() => {
        const side = document.querySelector(".sidebar");
        side.id = "close";
      }}
    >
      <div className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search..."
          spellCheck="false"
          onChange={(e) => handlekey(e)}
        />
        <div className="search__icon">
          <FaSearch />
        </div>
      </div>
      {sections.map((obj, index) => {
        return (
          <Section
            key={index}
            title={obj.title}
            content={obj.content}
            SyntaxHighlighter={SyntaxHighlighter}
            codestyle={codestyle}
          />
        );
      })}
    </main>
  );
};
export default Body;
