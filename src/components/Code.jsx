import { RxCopy } from "react-icons/rx";
import { shadesOfPurple } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code = ({ obj, index, codeblock, subtitle, SyntaxHighlighter }) => {
  const copyCode = (index) => {
    navigator.clipboard.writeText(codeblock[index].code);
  };
  return (
    <div className="code">
      <button id={`button_${index}`} aria-label="copy" onClick={() => copyCode(index)}>
        <RxCopy key={`${subtitle}_icon_${index}`} />
      </button>
      <SyntaxHighlighter
        key={`${subtitle}_code_${index}`}
        language="javascript"
        style={shadesOfPurple}
      >
        {`//${obj.comment}\n${obj.code}`}
      </SyntaxHighlighter>
    </div>
  );
};
export default Code;
