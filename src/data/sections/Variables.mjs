export const Variables = {
  title: "Variables",
  content: [
    {
      subtitle: "Basics of Variables",
      description: "",
      codeblock: [],
      imppoints: [
        "Cannot Start a variable name with digit (0-9)",
        "Varaible name can contain symbols like dollar'$' and underscore'_'.",
        "we can declare a variable using var, let and const",
        "var is not a preferred way to declare a variable",
        "If a variable is not initalized than its default value is undefined",
        "Undeclare Variable throws a refrence error",
        "Non Strict Mode is the default Javascript mode",
        "In non strict mode multiple declaration of variables is allowed if done using 'var'",
        "Strict Mode was introduces in ECMA-5",
        "Strict Mode Syntax: 'use strict'",
      ],
    },
    {
      subtitle: "Variable Hoisting (var, let, const)",
      description:
        "Hoisting is the process of moving all the declaration at the top of the program",
      codeblock: [
        {
          comment: "Var Hoisting",
          code: "console.log(x);  /*undefined*/\nvar x;\nconsole.log(x);  /*undefined*/\nx = 2;\nconsole.log(x);  /*2*/",
        },
        {
          comment: "Let Hoisting",
          code: "console.log(x);  /*Cannot access 'x' before initialization*/\nlet x;\nconsole.log(x);  /*undefined*/\nx = 2;\nconsole.log(x);  /*2*/",
        },
        {
          comment: "Const Hoisting",
          code: "console.log(x);  /*Cannot access 'x' before initialization*/\nconst x = 2;\nconsole.log(x);  /*2*/",
        },
      ],
      imppoints: [
        "All declarations are processed before any other pard of code is executed",
        "thus declaring all the variables at top",
        "It only move Declaration not Initialization",
        "let and const are also hoisted at top but not initialized",
        "let and const cannot be accessed before initialization",
        "const always requires initialization with declaration",
      ],
    },
    {
      subtitle: "Let vs Var",
      description: "",
      codeblock: [
        {
          comment: "window object",
          code: "var x = 1;\nlet y = 2;\nconsole.log(window.x)  /*1*/\nconsole.log(window.y) /*undefined*/",
        },
      ],
      imppoints: [
        "var has a global scope whereas let has a local scope, means var can be accesed globally using window objects",
        "var can be declared multiple times",
        "Hoisting is done in both var and let but let can't be accessed before initialization and var is initialized with undefined during hoisting",
        "If we declare using var in global scope then variable gets added to window object but it dosen't happen with let",
      ],
    },
    {
      subtitle: "Type Conversion",
      description: "Two types of conversions: Implicit, Explicit",
      codeblock: [
        {
          comment: "Implicit",
          code: "console.log('5' + 3) /*'53' String*/\nconsole.log('5' - 2) /*3 Number*/\nconsole.log('10' * 2) /*20 Number*/\nconsole.log('10' / 2) /*5 Number*/\nconsole.log(23 - trure) /*22 Number*/\nconsole.log(true - null) /*1 Number*/\nconsole.log(false * undefined) /*NaN undefined changed to NaN*/\nconst arr = []\nif(arr){  /*arr is false bcoz empty*/\n  console.log('hello');\n}",
        },
        {
          comment: "Explicit",
          code: "Number('23') /*23 Number*/\nString(23) /*'23' String*/\nBoolean(1) /*true Boolean*/",
        },
      ],
      imppoints: [
        "+ changes number to a string",
        "-, *, / changes string to a number",
        "=== does not trigger implicit conversions",
        "== changes null to 0 for comparison",
        "NaN is a Number type when a conversion is not valid than it returns NaN",
      ],
    },
  ],
};
