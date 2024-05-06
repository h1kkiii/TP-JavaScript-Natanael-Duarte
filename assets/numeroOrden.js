function ordenarNumeros(numeros) {
    return numeros.sort((a, b) => a - b);
}

let numeros = prompt("Ingrese tres números separados por comas:").split(" ").map(parseFloat);
console.log("Números ordenados:", ordenarNumeros(numeros));