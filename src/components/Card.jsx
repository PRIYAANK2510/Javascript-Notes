import "../css/Card.css";
import ImpPoints from "./ImpPoints";
import Code from "./Code";

const Card = ({ subtitle, description, codeblock, imppoints, SyntaxHighlighter, codestyle }) => {
  return (
    <div className="card">
      <h3 className="subtitle">{subtitle}</h3>
      <p className="description">{description}</p>
      {codeblock.map((obj, index) => {
        return (
          <Code
            key={`${subtitle}_code_${index}`}
            obj={obj}
            index={index}
            codeblock={codeblock}
            subtitle={subtitle}
            SyntaxHighlighter={SyntaxHighlighter}
            codestyle={codestyle}
          />
        );
      })}

      <ul className="implist">
        {imppoints.map((list, index) => {
          return <ImpPoints key={`${subtitle}_list_${index}`} list={list} />;
        })}
      </ul>
    </div>
  );
};
export default Card;
