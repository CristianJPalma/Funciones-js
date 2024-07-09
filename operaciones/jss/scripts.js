let numUno;
let numDos;

const suma =  function(pnumUno, pnumDos){
    numUno = pnumUno;
    numDos = pnumDos;
    let sumar;
    sumar = numUno + numDos;
    return sumar;
}
const resta =  function(pnumUno, pnumDos){
    numUno = pnumUno;
    numDos = pnumDos;
    let restar;
    restar = numUno - numDos;
    return restar;
}
const multiplicacion =  function(pnumUno, pnumDos){
    numUno = pnumUno;
    numDos = pnumDos;
    let multiplicar;
    multiplicar = numUno * numDos;
    return multiplicar;
}
const division =  function(pnumUno, pnumDos){
    numUno = pnumUno;
    numDos = pnumDos;
    let dividir;
    dividir = numUno / numDos;
    return dividir;
}

const operaciones = function(poperar,pnumUno,pnumDos){
    let operar = poperar;
    let operacion;
    if(operar =="sumar"){
        operacion = suma(pnumUno, pnumDos);
    }
    else if(operar == "restar"){
        operacion = resta(pnumUno, pnumDos);
    }
    else if(operar == "multiplicar"){
        operacion = multiplicacion(pnumUno, pnumDos);
    }
    else if(operar == "dividir"){
        operacion = division(pnumUno, pnumDos);
    }
    else{
        operacion = "Error no se identifica la operacion...";
    }
    return operacion;
}