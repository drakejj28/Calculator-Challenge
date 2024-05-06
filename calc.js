// calculator app

// get the display-panel element
const display = document.getElementById("display-panel");

// creates three different functions (to calculate the equation, display the result, and clear the display panel)
function appendToDisplay(input){

    // gets the value of display and appends it with += input
    display.value += input;
}

function clearDisplay(){

    // gets the value of display and sets it equal to an empty string
    display.value = "";
}

function calculate(){

    // gets the value of display and sets it equal to the eval function which then evaluates the value of display
    // the eval function will also display NaN(Not a Number) when the result is an undefined value or value that cannot be represented
    display.value = eval(display.value)
}