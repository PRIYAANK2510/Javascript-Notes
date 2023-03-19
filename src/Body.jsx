import Section from "./components/Section.jsx";
import { sectionsdata } from "./data/data";
import "./Body.css";
const Body = ({ SyntaxHighlighter }) => {
  return (
    <main>
      {sectionsdata.map((obj, index) => {
        return (
          <Section
            key={index}
            title={obj.title}
            content={obj.content}
            SyntaxHighlighter={SyntaxHighlighter}
          />
        );
      })}
    </main>
  );
};
export default Body;
