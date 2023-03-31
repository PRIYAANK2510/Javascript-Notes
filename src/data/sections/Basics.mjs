export const Basics = {
  title: "Basics",
  content: [
    {
      subtitle: "History of JAVASCRIPT",
      description: "",
      codeblock: [],
      imppoints: [
        "Sep 1995 Brendan Eich(works at Netscape) devlop a language and name it Mocha",
        "Later it is renamed to Livescript",
        "Dec 1995 (Netscape and Sun 'owners of JAVA') named it JAVASCRIPT",
        "1997 ECMA takes responsibility for maintaining Javascript language",
        "ECMA stands for European Computer Manufacturer Association",
        "First ECMA version was ECMA-262",
        "In 1997 ES-1 was released for IE browser",
        "Latest ECMA version is ES-6",
      ],
    },
    {
      subtitle: "Features of JAVASCRIPT",
      description: "",
      codeblock: [
        {
          comment: "Dynamically Typed",
          code: `var a="Hello"
console.log(typeof(a)); /*returns string*/
a=5;
console.log(typeof(a)); /*returns number*/`,
        },
      ],
      imppoints: [
        "Cross Platform Support",
        "OOP but it's not like JAVA it is prototype based OOP",
        "Scripting Language: Runs on Client side to handle cookies, session and local storage",
        "Dynamically Typed: Data Type of variables are not fixed",
        "Loosely typed: It allows for implicit conversion of types",
        "It is Case Sensitive",
        "JIT Compile: Just In Time which convert JScode to Byte code",
        "Interpreted: Use Interpreter to convert byte code to machine code",
      ],
    },
    {
      subtitle: "JAVASCRIPT Engine",
      description: "",
      codeblock: [],
      imppoints: [
        "Javascript is executed by a engine embedded in browser",
        "Engine is sometimes also called as Javascript Virtual Machine",
        "(Chrome, Opera, Edge) uses V8 Engine",
        "(Firefox) uses SpiderMonkey Engine",
        "(IE) uses Chakra Engine",
        "Parsing => Engiene reads the script and generates an AST (Abstract Syntax Tree).",
        "Interpretation => AST is converted into ByteCode.",
        "JIT => Optimize the code as much as possible.",
        "Execution => Optimize code is executed.",
      ],
    },
    {
      subtitle: "JAVA vs JavaScript",
      description: "",
      codeblock: [],
      imppoints: [
        "(JAVA) : It is class based object model",
        "(JavaScript) : It is prototype base object model",
        "(JAVA) : Static typing",
        "(JavaScript) : Dynamic typing",
        "(JAVA) : Strongly Typed",
        "(JavaScript) : Loosely Typed",
        "(JAVA) : It can write in hard disk automatically",
        "(JavaScript) : It can't write in hard disk automatically",
      ],
    },
    {
      subtitle: "Async vs Defer",
      description: "Two different way to load your script file in the HTML document Asynchronously",
      codeblock: [
        {
          comment: "script is downloaded and executed as soon as possible",
          code: `<script async src="#"></script>`,
        },
        {
          comment: "script is downloaded and executed when document parsing is completed",
          code: `<script defer src="#"></script>`,
        },
      ],
      imppoints: [],
    },
  ],
};
