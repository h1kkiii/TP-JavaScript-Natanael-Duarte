cantProd = parseInt(prompt("Ingrese la cantidad de productos que llevará: "))

if (cantProd <1)
    console.log("Ingrese una cantidad válida");
else if (cantProd = String)
    console.log("Ingrese una cantidad válida");
prec = parseInt(prompt("Ingrese el valor de los productos a llevar: "));
if (prec <1)
    console.log("Ingrese una precio válida");
else if (prec = String)
    console.log("Ingrese una precio válida");
precTot = cantProd * prec;
desc = precTot * 0.15;
desc = precTot - desc;
if (cantProd >=10 && precTot>= 20000)
    console.log("Se aplicará un descuento del 15%");
else if (cantProd<10)
    console.log("No es aplicable para el descuento, su precio total es de:" ,precTot);
else if(precTot<20000)
    console.log("No es aplicable para el descuento, su precio total es de:" ,precTot);
else if(cantProd >=10 && precTot>= 20000)
    desc===true 
else desc===false
if (desc===true)
    console.log("Su precio con descuento es:" ,desc);
