function esPalindromo(cadena) {
    let cadenaLimpia = cadena.replace(/[\W_]/g, '').toLowerCase();
    return cadenaLimpia === cadenaLimpia.split('').reverse().join('');
}