import Body from "./Body";
import Header from "./Header";
import SyntaxHighlighter from "react-syntax-highlighter";
import { shadesOfPurple } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { atelierCaveLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const App = () => {
  return (
    <>
      <Header />
      <Body SyntaxHighlighter={SyntaxHighlighter} />
    </>
  );
};
export default App;
