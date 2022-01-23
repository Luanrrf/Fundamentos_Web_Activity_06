var i = window.prompt("Informe o numero da sequência que deseja")
var num1 = 1;
var num2 = 0;


if (i > 2){
    for (; i > 1; i--){
        result = num1 + num2;
        num2 = num1;
        num1 = result;
    }
    window.alert("Seu resultado é: " + result);
}
else{
    if ((i > 0)&&(i<2)){
        result = 1;
        window.alert("Seu resultado é: " + result);
    }
    else
    window.alert("Não existe sequência Fibonacci para números menores que 1");
}