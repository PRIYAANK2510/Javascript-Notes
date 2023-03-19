import Card from "./Card";
import "../css/Section.css";
const Section = ({ title, content, SyntaxHighlighter, codestyle }) => {
  return (
    <div className="section">
      <h2>{title}</h2>
      <div className="card_section">
        {content.map((obj, index) => {
          return (
            <Card
              key={`${title}_${index}`}
              subtitle={obj.subtitle}
              description={obj.description}
              codeblock={obj.codeblock}
              imppoints={obj.imppoints}
              SyntaxHighlighter={SyntaxHighlighter}
              codestyle={codestyle}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Section;
