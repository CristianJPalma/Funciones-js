function tablaMultiplicar(Ptabla, Pnumero) {
    let tabla = Ptabla
    let numero = Pnumero
    for (let contador = 1; contador <= numero; contador++) {
        let resultado = tabla * contador;
        console.log(tabla + " x " + contador + " = " + resultado);
    }
}
