var number = 12;
var numberStart = number;

if (number < 1)
    window.alert("Desculpe mas números fatoriais tem que ser maiores que 0");
else{
    for(let i = number-1; i > 1; i-- ){
        number = number * i;
    }
    window.alert(numberStart + "!" + " = " + number);
}
