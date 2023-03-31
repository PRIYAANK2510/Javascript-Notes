export const Datatypes = {
  title: "Datatypes",
  content: [
    {
      subtitle: "Type of Datatypes",
      description: "Datatypes are of two types: Primitive and Non-Primitive Datatypes",
      codeblock: [
        {
          comment: "valueOf()",
          code: "let x = new Number(1);\nx.valueOf();  /*returns the primitive value*/",
        },
        {
          comment: "toString()",
          code: "let x = new Boolean(true);\nx.toString();  /*returns the string type value*/",
        },
      ],
      imppoints: [
        "Primitive Datatypes: (Number, BigInt, String, Boolean, Undefined, Null, Symbol)",
        "Non-Primitive: (Object, Array, RegExp)",
        "Every Primitive datatype also has it's own corresponding Non-primitive object.",
        "So Number Primitive datatype has Number object also.",
        "All JavaScript data types have a valueOf() and a toString() method.",
        "The valueOf() method is used internally in JavaScript to convert objects to primitive values.",
      ],
    },
    {
      subtitle: "Numbers",
      description: "Number values represent floating-point numbers like 37 or -9.25",
      codeblock: [
        {
          comment: "Static Properties",
          code: "console.log(Number.MAX_VALUE)  /*1.7976931348623157E+308*/\nconsole.log(Number.NaN) /*returns NaN*/\nconsole.log(Number.MIN_VALUE)  /*5E-324*/",
        },
        {
          comment: "Static Methods",
          code: "console.log(Number.isNaN(Number.NaN)); /*returns true*/\nconsole.log(Number.parseFloat('4.567afs')); /*returns 4.567*/\nconsole.log(Number.parseInt('122'));  /*returns 123 integer*/\nconsole.log(Number.isInteger(2/3)); /*returns false*/\nconsole.log(Number.isFinite(1 / 0));  /*returns false*/",
        },
        {
          comment: "Math Methods",
          code: "console.log(Math.sqrt(81));  /*returns 9*/\nconsole.log(Math.pow(7,2));  /*returns 49*/\nconsole.log(Math.trunc(13.213)); /*returns 13*/\nconsole.log(Math.round(0.8)); /*returns 1*/\nconsole.log(Math.min(5, 4, 2, 3, 7)); /*returns 2*/\nconsole.log(Math.max(5, 4, 2, 3, 7)); /*returns 7*/\nconsole.log(Math.ceil(3.4)); /*returns 4*/\nconsole.log(Math.floor(3.9)); /*returns 3*/\nconsole.log(Math.random()); /*returns random number b/w 0 to 1*/\n",
        },
      ],
      imppoints: [
        "In javascript, the integers, float values (or decimals), and all the other numeric values are represented by the number datatype.",
      ],
    },
    {
      subtitle: "Strings",
      description: "",
      codeblock: [
        {
          comment: "strings",
          code: "const str = 'Welcome';\nconst str2 = 'Buddy';\nconst str3 = '  Hello  ';\nconst str4 = 'Hello, How are you?'",
        },
        {
          comment: ".length",
          code: "console.log(str.length);  /*result 7*/",
        },
        {
          comment: ".charAt(index)",
          code: "console.log(str.charAt(4)); /*returns 'o'*/",
        },
        {
          comment: ".concat(str1,str2,str3)",
          code: "console.log(str.concat(str2));  /*returns 'WelcomeBuddy'*/",
        },
        {
          comment: ".includes(str,startpos)",
          code: "console.log(str.includes('c'));  /*returns true*/\nconsole.log(str.includes('c',4));  /*returns false*/",
        },
        {
          comment: ".endsWith(str,endpos)",
          code: "console.log(str.endsWith('m'));  /*returns false*/\nconsole.log(str.endsWith('m',6));  /*returns true*/",
        },
        {
          comment: ".indexOf returns index of first occ or -1",
          code: "console.log(str.indexOf('e')); /*return 1*/",
        },
        {
          comment: ".lastIndexOf returns index of last occ or -1",
          code: "console.log(str.lastIndexOf('e')); /*return 6*/",
        },
        {
          comment: "return string in lowercase",
          code: "console.log(str.toLowerCase());  /*'welcome'*/",
        },
        {
          comment: "return string in uppercase",
          code: "console.log(str.toUpperCase());  /*WELCOME*/",
        },
        {
          comment: ".repeat(value)",
          code: "console.log(str.repeat(2));/*WelcomeWelcome*/",
        },
        {
          comment: ".trim() remove extra whitespaces",
          code: "console.log(str3.trim()); /*'Hello'*/",
        },
        {
          comment: ".substring(indexstart, indexend)",
          code: "console.log(str.substring(3)); /*come*/",
        },
        {
          comment: ".startsWith(searchString, position)",
          code: "console.log(str.startsWith('Wel'));  /*returns true*/",
        },
        {
          comment: ".split('pattern')",
          code: "console.log(str4.split(' '));  /*returns ['Hello,','How','are','you']*/",
        },
        {
          comment: ".slice(indexStart, indexEnd)",
          code: "console.log(str.slice(2));  /*lcome*/",
        },
        {
          comment: ".replace(pattern, replacement)",
          code: "console.log(str.replace('e','p'));  /*'Wplcomp'*/",
        },
      ],
      imppoints: [
        "String type is used to store elements in a textual form. The elements are stored in 16-bit integer form.",
        "In javascript, once the string is created, it cannot be further manipulated.",
      ],
    },
  ],
};
