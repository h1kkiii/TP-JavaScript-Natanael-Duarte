let n1, n2, n3, pm
n1 = parseInt(prompt("Ingrese su nota del Primer Trimestre:"));
n2 = parseInt(prompt("Ingrese su nota del Segundo Trimestre"));
n3 = parseInt(prompt("Ingrese su nota del Tercer Trimestre"));
console.log(n1, n2, n3);
pm = n1+n2+n3;
pm = parseInt(pm / 3);
console.log(pm);
if ((n1 & n2 & n3) <0 && (n1 & n2 & n3) >10 )
    console.log("Ingrese valores del 1 al 10");
else if (isNaN(n1, n2, n3)) {
    console.log("Ingrese valores distintos a vacio o numeros")
}
switch (true) {
    case (pm <=3 && pm >=1):
        console.log("Nota insuficiente");
        break;
    case (pm >3 && pm <=5):
        console.log("Nota Regular");
        break;
    case (pm <=7 && pm >=6):
        console.log("Nota Buena");
        break;
    case (pm <=9 && pm >=8):
        console.log("Nota Muy Buena");
        break;
    case (pm === 10):
        console.log("Nota Sobresaliente");
        break;
}