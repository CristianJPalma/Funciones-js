function factorial(Pnumero){
    let numero = Pnumero;
    let factorial = 1;
    let contador = 0;
    while(contador < numero){
        contador = contador + 1;
        factorial = factorial * contador;
    }
    console.log("!"+numero+"="+factorial);
}