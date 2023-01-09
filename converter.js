let celsius = document.getElementById("C");
let fahrenheit = document.getElementById("F");

function ctof(){
    let output = ( parseFloat(celsius.value) * 9/5 ) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function ftoc(){
    let output = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat( output.toFixed(2));
    console.log(output);
}