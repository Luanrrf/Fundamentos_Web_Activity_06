document.addEventListener('DOMContentLoaded',function(){
    var result = 0;

    for(let i = 1; i <= 1000; i++){
        if (i % 2 == 0){
            result = result + i;
        }
    }
    
    window.alert("A soma de todos os pares positivos até 1000 é: " + result);
});