var resetNumber = false;
var firstNumber = "";
var selectedOperation = "";
var secondNumber = "";
var maxChar = 10;

resetCalculator();


function resetCalculator() {

  displayText.innerHTML = "0";

  firstNumber = "";
  selectedOperation = "";
  secondNumber = "";

}

function resetLastAction() {

  if(calcTurnedOn) {

    resetNumber = true;
    displayText.innerHTML = "0";

  }

}

function getNumber(number) {


  if(resetNumber || displayText.innerHTML == "0") {

    displayText.innerHTML = number;

  } else if(displayText.innerHTML.length < maxChar) {

    displayText.innerHTML = displayText.innerHTML + number;

  }

  var updatedNumber = displayText.innerHTML;

  if(firstNumber == "" || selectedOperation == "") {

    firstNumber = parseFloat(updatedNumber);

  } else {

    secondNumber = parseFloat(updatedNumber);

  }

  resetNumber = false;

}

function putDecimalNumber() {

  var text = displayText.innerHTML;


  if((text.length < maxChar - 1) && (text - parseInt(text)) == 0) {

    displayText.innerHTML = displayText.innerHTML + ".";

  }

  resetNumber = false;

}

function getOperator(operation) {

  if(secondNumber != "") {

    resultButtonClick();

  }

  selectedOperation = operation;
  resetNumber = true;

}

function getResult() {

  var result = 0;

  if(selectedOperation == "+") {

    result = firstNumber + secondNumber;

  } else if(selectedOperation == "-") {

    result = firstNumber - secondNumber;

  } else if(selectedOperation == "*") {

    result = firstNumber * secondNumber;

  } else if(selectedOperation == "/") {

    result = firstNumber / secondNumber;

  } 

  displayResult(result);

}

function getSpecialOperator(operation) {

  var result = 0;

  if(operation == "%") {

    if(selectedOperation == "+") {

      result = firstNumber + (secondNumber/100)*firstNumber;

    } else if(selectedOperation == "-") {

      result = firstNumber - (secondNumber/100)*firstNumber;

    } else if(selectedOperation == "*") {

      result = firstNumber * (secondNumber/100);

    } else if(selectedOperation == "/") {

      result = firstNumber / (secondNumber/100);
    } 

  } else if(operation == "exp") {

    result = firstNumber ** 2;

  } else if(operation == "sqr") {

    result = firstNumber ** (1/2);

  }

  displayResult(result);

}

function displayResult(result) {

  var resultChar = "" + result;

  if(resultChar.length > maxChar) {

    var digitsChar = maxChar - (result.toExponential(maxChar).length - maxChar);
    displayText.innerHTML = result.toExponential(digitsChar);

  } else if((result - parseInt(result)) == 0) {

    displayText.innerHTML = parseInt(result);
    firstNumber = parseInt(result); 

  } else {

    displayText.innerHTML = parseFloat(result);
    firstNumber = parseFloat(result); 

  }

  selectedOperation = "";
  secondNumber = "";
  resetNumber = true;

}