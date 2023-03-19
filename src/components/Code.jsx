import { RxCopy } from "react-icons/rx";

const Code = ({ obj, index, codeblock, subtitle, SyntaxHighlighter, codestyle }) => {
  const copyCode = (index) => {
    navigator.clipboard.writeText(codeblock[index].code);
  };
  return (
    <div className="code">
      <button id={`button_${index}`} aria-label="copy" onClick={() => copyCode(index)}>
        <RxCopy key={`${subtitle}_icon_${index}`} />
      </button>
      <SyntaxHighlighter key={`${subtitle}_code_${index}`} language="javascript" style={codestyle}>
        {`//${obj.comment}\n${obj.code}`}
      </SyntaxHighlighter>
    </div>
  );
};
export default Code;
