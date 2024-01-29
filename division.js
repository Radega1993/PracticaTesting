function division(a, b) {
    if(b === 0) throw new Error("División por cero");
    return a / b;
}