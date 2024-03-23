import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  {message: "Enter second number", type: "number", name: "secondNumber"},
  {message: "Select one of the oprators to perform action",
type: "list",
name: "operator",
choices:[ "Addition", "Subtraction","Multipilication", "Division"],
  },
]);


console.log(asnwer);

//conditinal Statments

if (asnwer.operator === "Addition") {
    console.log(asnwer.firstNumber + asnwer.secondNumber);
}
else if (asnwer.operator === "Subtraction"){
    console.log(asnwer.firstNumber - asnwer.secondNumber);
}
else if (asnwer.operator === "Multipilication"){
console.log(asnwer.firstNumber * asnwer.secondNumber);
}
else if (asnwer.operator === "Division"){
    console.log(asnwer.firstNumber / asnwer.secondNumber);
} else {
    console.log ("plese select valid oprator");
}
