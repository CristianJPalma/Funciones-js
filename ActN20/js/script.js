function factorialFor(Pnumero){
    let numero = Pnumero
    let factorial = 1;
    let contador;
    for(contador = 1;contador<=numero;contador++){
     factorial = factorial * contador;
    }
    console.log("!"+numero+" = "+factorial);
}