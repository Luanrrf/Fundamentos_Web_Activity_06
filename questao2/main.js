number = window.prompt("Informe um numero");
var result;
var text = "";

for (let i = 1; i <= 30; i++){
    result = Math.pow(number,i);
    text += (number + " elevado a " + i + ":" + " " + result + '\n');
}
    window.alert("Por favor, verifique o console do navegador!");
    console.log(text);