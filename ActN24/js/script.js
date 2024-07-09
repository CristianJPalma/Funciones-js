function tablaMultiplicar(Ptabla, Pnumero) {
    let tabla = Ptabla
    let numero = Pnumero
    let par = 0;
    let impar = 0;
    for (let contador = 1; contador <= numero; contador++) {
        let resultado = tabla * contador;
        console.log(tabla + " x " + contador + " = " + resultado);
        if((resultado%2)== 0){
            console.log(resultado+" Es numero par");
            par = par + 1;
        }
        else{
            console.log(resultado+" Es numero impar");
            impar = impar + 1;
        }
    }
    return {
        par, impar
    }
}