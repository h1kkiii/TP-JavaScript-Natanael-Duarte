let edad = prompt("Escriba su edad: ");
if (edad >0 && edad <=12)
    console.log("Usted es un niño");
else if (edad >12 && edad <=19)
    console.log("Usted es un adolescente");
else if(edad >19 && edad <=59)
    console.log("Usted es un adulto");
else if(edad >=60)
    console.log("Usted es un adulto mayor");
else console.log("Ingrese una edad válida");