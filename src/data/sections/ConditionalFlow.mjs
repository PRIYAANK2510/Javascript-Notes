export const ConditionalFlow = {
  title: "Conditional Flow",
  content: [
    {
      subtitle: "If Else and Ternary Flow",
      description: "",
      codeblock: [
        {
          comment: "If ElseIf and Else",
          code: "if(condition){\n  /*Executes if the condition is true*/\n} else if(condition){\n  /*Executes if the condition is false*/\n} else{\n  /*Executes if the condition is*/\n}",
        },
        {
          comment: "Ternary condition",
          code: "const marks = 80;\nconsole.log(( marks >= 40 ) ? 'Passed' : 'Failed' );   /*Passed*/",
        },
      ],
      imppoints: [],
    },
    {
      subtitle: "Switch Statements",
      description: "",
      codeblock: [
        {
          comment: "Switch syntax",
          code: "switch (expression) {\n case caseValue1:\n  //code a\n  break;\n case caseValue2:\n  //code b\n  break;\n default:\n  //code c\n  break;\n}",
        },
      ],
      imppoints: [
        "The expression is the condition or the value that needs to be evaluated.",
        "The case is declared by using case keyword followed by the caseValue.",
        "The break keyword breaks out of the switch block.",
        "The default statement is executed when the expression fails to evaluate true with respect to any case.",
      ],
    },
    {
      subtitle: "Loops",
      description: "",
      codeblock: [],
      imppoints: [],
    },
  ],
};
