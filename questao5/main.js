var number = 1000;
var numberCopy = number;
var contadoresPrimos = 0;
var divisores = 0;

number--;

for(let j = 1; number > 2; number--){
    divisores = 0;

    for (let i = 0; i <= number; i++){
        if(number % i == 0)
            divisores++;
    }

    if (divisores == 2){
        contadoresPrimos++;
    }
}

window.alert("Entre o número 2 e " + numberCopy + " temos " + contadoresPrimos + " números primos.");
