let display = document.getElementById("display");

let currentInput = '0';

function appendToDisplay(value){
    if( currentInput === '0'  ){
        currentInput = value;
    }else{
        currentInput += value;
    }
    display.textContent = currentInput;

    // .textContent is a built-in JavaScript property used to get or change the text inside an HTML element.
}

function clearButton(){
    currentInput = '0';
    display.textContent = '0'
}

function equalsto(){
    try{
        let result = eval(currentInput);
        // eval() is a built-in JavaScript function.
       // It takes a string and treats it like a mathematical expression.

       currentInput = String(result);
       display.textContent = currentInput;


    }catch(error){

    display.textContent = "ERROR"
    currentInput = '0'



}
}