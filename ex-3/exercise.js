let num1 = prompt("Please insert the first number!");
let num2 = prompt("Please insert the second number!");
if (num1 < num2) {
    window.alert("The greater number of"+ num1+ "and"+ num2+ "is"+ num2); 
  } 
  else if (num1 > num2) {
    window.alert("The greater number of"+ num1+ "and"+ num2+ "is"+ num1);
  }
  else {
    window.alert("They are equal");
  }
