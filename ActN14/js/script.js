function calcularSalario(PvalorDia,PnumeroDia){
    let valorDia = PvalorDia;
    let numeroDia = PnumeroDia;
    let salario = valorDia * numeroDia;
    return salario;
}

function calcularSalud(PvalorDia,PnumeroDia){
    let salarioPersona = calcularSalario(PvalorDia,PnumeroDia);
    let saludPersona = salarioPersona * 0.12;
    return saludPersona;
}

function calcularSubTransporte(PvalorDia,PnumeroDia){
    let salarioPersona = calcularSalario(PvalorDia,PnumeroDia);
    let salarioMinimo = 1300000;
    let subTrasporte;
    if(salarioPersona <= (salarioMinimo * 2)){
        subTrasporte = 114000;
    }
    else{
        subTrasporte = 0;
    }
    return subTrasporte;
}

function calcularPension(PvalorDia,PnumeroDia){
    let salarioPersona = calcularSalario(PvalorDia,PnumeroDia);
    let pensionPersona = salarioPersona * 0.16;
    return pensionPersona;
}

function calcularArl(PvalorDia,PnumeroDia){
    let salarioPersona = calcularSalario(PvalorDia,PnumeroDia);
    let ArlPersona = salarioPersona * 0.052;
    return ArlPersona;
}

function calcularRetencion(PvalorDia,PnumeroDia){
    let salarioPersona = calcularSalario(PvalorDia,PnumeroDia);
    let salarioMinimo = 1300000;
    let retencion;
    if(salarioPersona >= (salarioMinimo * 4)){
        retencion = salarioPersona * 0.04
    }
    else{
        retencion = 0
    }
    return retencion;
}

function calcularDeducible(PvalorDia,PnumeroDia){
    let descuento;
    let dSalud = calcularSalud(PvalorDia,PnumeroDia);
    let dPension = calcularPension(PvalorDia,PnumeroDia);
    let dArl = calcularArl(PvalorDia,PnumeroDia);
    let dRetencion = calcularRetencion(PvalorDia,PnumeroDia);
    descuento = dSalud + dPension + dArl + dRetencion;
    return descuento; 
}

function calcularPagoTotal(PvalorDia,PnumeroDia){
    let salarioPersona = calcularSalario(PvalorDia,PnumeroDia);
    let subTrasporte = calcularSubTransporte(PvalorDia,PnumeroDia);
    let descuento = calcularDeducible(PvalorDia,PnumeroDia);
    let pago;
    pago = salarioPersona + subTrasporte - descuento;
    return pago;
}