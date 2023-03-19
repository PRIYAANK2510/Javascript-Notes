import Section from "./components/Section.jsx";
import { sectionsdata } from "./data/data";
const Body = ({ SyntaxHighlighter, codestyle }) => {
  return (
    <main>
      {sectionsdata.map((obj, index) => {
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
