function mayorTresNumeros(PnumUno,PnumDos, PnumTres){
    let numUno = PnumUno;
    let numDos = PnumDos;
    let numTres = PnumTres;
    let mayor;
    if((numUno>numDos) && (numUno>numTres)){
        mayor = numUno
    }
    else{
        if((numDos>numUno) && (numDos>numTres)){
            mayor = numDos
        }
        else{
            mayor = numTres
        }
    }
    return mayor
}