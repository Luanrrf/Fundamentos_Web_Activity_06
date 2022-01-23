number = window.prompt("Informe um numero");
var result;

for (let i = 1; i <= 30; i++){
    result = Math.pow(number,i);
    console.log(number + " elevado a " + i + ":" + " " + result);
}
