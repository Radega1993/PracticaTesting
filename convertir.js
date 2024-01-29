function convertirAEuros(dolares) {
    return dolares * 0.88;
}
function calcularCostoEnEuros(cantidad, precioDolares) {
    return cantidad * convertirAEuros(precioDolares);
}
