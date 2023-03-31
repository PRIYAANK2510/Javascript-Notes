export const Modules = {
  title: "Modules",
  content: [
    {
      subtitle: "ES6 Imports Exports",
      description: "",
      codeblock: [
        {
          comment: "Basic Export and Import",
          code: "/*Export*/\nexport function greet(name){\n  return 'Hello, ${name}';\n}\nexport const message = 'Hello';\n/*Import*/\nimport {greet, message} from './index.js';\nconsole.log(greet('Sam')); /*returns 'Hello Sam' */\nconsole.log(message); /*returns 'Hello'*/",
        },
        {
          comment: "Default Export and Import",
          code: "/*Export*/\nexport default function greet(name){\n  return 'Hello, ${name}';\n}\n/*Import*/\nimport random from './index.js' /*random act as greet function*/\nconsole.log(random('Sam')); /*returns 'Hello Sam'*/",
        },
        {
          comment: "mix Default and Normal import",
          code: "import default, {exp1, exp2} from './index.js';",
        },
        {
          comment: "import Complete module",
          code: "import * as utils from './index.js';\nutils.greet('Sam') /*returns 'Hello Sam'*/",
        },
        {
          comment: "Export in End all together",
          code: "function greet(name){\n  return 'Hello, ${name}';\n}\nconst msg = 'Hello';\nexport {greet, message};",
        },
      ],
      imppoints: [
        "If you are using ES6 modules in Node.js enviorment than name your file with '.mjs' extensions",
        "Curly Braces are not uses in Default Imports",
        "A file can have multiple exports but only ine default exports",
      ],
    },
    {
      subtitle: "Node.js Imports Exports",
      description: "",
      codeblock: [
        {
          comment: "utils.js",
          code: "console.log('Executing');\nfunction greet(name){\n  return `Hello, ${name}`;\n}\nconst msg ='Hello';\nmodule.exports = {  /*Exporting*/\n  greet,\n  message,\n};",
        },
        {
          comment: "index.js",
          code: "util = require('./utils.js');  /*Importing*/\nconst gs = util.greet('Sam');\nconsole.log(gs);\nconsole.log(util.msg);",
        },
        {
          comment: "Output\n Executing\n'Hello, Sam'\n'Hello'",
          code: "",
        },
      ],
      imppoints: ["Read the File", "Execute the File", "Returns the export Object"],
    },
  ],
};
