
// CONVERT TO CELSIUS
function toCelsius () {
    var userInput = document.getElementById("temp").value;
    var tempReturn = (userInput -  32) / 1.8;
    if (tempReturn > 32) {
        document.getElementById("temp-display").style.color = "red";
        } else if (tempReturn < 0) {
            document.getElementById("temp-display").style.color = "blue";
        } else {
            document.getElementById("temp-display").style.color = "black";
    }
    tempReturn += "&#8451;";
    console.log(tempReturn);
    postTemp(tempReturn);
}
// CONVERT TO FAHRENHEIT
function toFahrenheit () {
    var userInput = document.getElementById("temp").value;
    var tempReturn = userInput * 1.8 + 32;
    if (tempReturn > 90) {
        document.getElementById("temp-display").style.color = "red";
        } else if (tempReturn < 32) {
            document.getElementById("temp-display").style.color = "blue";
        } else {
            document.getElementById("temp-display").style.color = "black";
    }
    tempReturn += "&#8457";
    console.log(tempReturn);
    postTemp(tempReturn);
}
//PUBLISH TO DOM
function postTemp(tempReturn) {
    var tempHTML = document.getElementById("temp-display");
    tempHTML.innerHTML = "<p>" + tempReturn + "</p>";
}

//RESET INPUT FIELD
function inputReset() {
    document.getElementById("temp").value = "";
}
    

// This function should determine which conversion should
// happen based on which radio button is selected.
var tempArray = document.getElementsByName("r1");
function determineConverter () {
    if (tempArray[0].checked) {
        toCelsius();
    } else if (tempArray[1].checked) {
        toFahrenheit();
    } else {
        alert("Please select temperature!")               
    }
}


// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var resetButton = document.getElementById("reset");
// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
resetButton.addEventListener("click", inputReset);