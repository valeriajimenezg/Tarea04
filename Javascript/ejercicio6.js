let operacion;
operacion = prompt ("Digite cual de las siguientes operaciones desea realizar: 1- Suma 2- Resta 3- Multiplicacion 4-Divison: ")
let numero1 = prompt ("Inserte el primer valor: ")
let numero2 = prompt ("Inserte el segundo valor: ")

suma = parseInt(numero1) + parseInt(numero2)
resta = parseInt(numero1) - parseInt(numero2)
multiplicacion = parseInt(numero1) * parseInt(numero2)
division = parseInt(numero1) / parseInt(numero2)

if (operacion == "1"){
    alert("La respuesta es " + suma)
}
if (operacion == "2"){
    alert("La respuesta es " + resta)
}
if (operacion == "3"){
    alert("La respuesta es " + multiplicacion)
}
if (operacion == "4"){
    alert("La respuesta es " + division)
}