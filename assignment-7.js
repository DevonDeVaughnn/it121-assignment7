//Start off with a grayed out total input
window.onload = function () {
  alert("Welcome to Assignment 7");
  const total = document.getElementById("total");
  const hello = document.getElementById("hello");
  hello.innerHTML = "Enter the fields below.";
  total.innerHTML = "Miles Per Gallon: " + "\n";
  const totalCalc = document.createElement("input");
  totalCalc.disabled = true;
  total.append(totalCalc);
};

//Setting up input for the miles driven
const miles = document.getElementById("miles");
const milesDriven = document.createElement("input");
milesDriven.type = "number";
miles.innerHTML = "Enter miles driven: " + "\n";
miles.append(milesDriven);

//Setting up input for the gallons used
const gallons = document.getElementById("gallons");
const gallonsUsed = document.createElement("input");
gallonsUsed.type = "number";
gallons.innerHTML = "Enter gallons of gas used: " + "\n";
gallons.append(gallonsUsed);

//creating submit button
const button = document.getElementById("btn");
button.innerHTML = "Calculate MPG";
button.style.padding = "5px";
button.style.height = "40px";
button.style.border = "none";
button.style.background = "#DA7422";
button.style.marginLeft = "0 auto";
button.style.marginTop = "30px";
button.style.width = "100%";

//calculating inputs and displaying them, replacing the grayed out field
function calculate() {
  const input1 = gallonsUsed.value;
  const input2 = milesDriven.value;
  const calculatedTotal = input2 / input1;
  if (!input1 || !input2) {
    alert("Please enter a positive number in both fields");
  } else {
    const hello = document.getElementById("hello");
    hello.innerHTML = "Thank you for using this app.";
    const total = document.getElementById("total");
    total.innerHTML = "Miles Per Gallon: " + calculatedTotal;
  }
}

//slight styling

let container = document.getElementById("container");
container.style.padding = "50px";
container.style.textAlign = "center";

let gas = document.getElementById("gas");
gas.style.position = "relative";
gas.style.margin = "auto";
gas.style.marginTop = "350px";
gas.style.top = "50%";
gas.style.background = "#A59132";
gas.style.width = "400px";
gas.style.height = "400px";
gas.style.display = "block";
gas.style.textAlign = "center";
gas.style.position = "relative";
gas.style.padding = "50px";

let input = document.getElementsByClassName("input");
var i;
for (i = 0; i < input.length; i++) {
  input[i].style.float = "right";
  input[i].style.marginBottom = "20px";
}
let label = document.getElementsByTagName("label");
var i;
for (i = 0; i < label.length; i++) {
  label[i].style.color = "#625834";
}
const hello = document.getElementById("hello");
hello.style.textAlign = "center";
