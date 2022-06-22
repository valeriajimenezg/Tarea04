let nota1 = prompt ("Inserte la nota del primer parcial de 0 a 100: ")
let nota2 = prompt ("Inserte la nota del segundo parcial de 0 a 100: ")
let nota3 = prompt ("Inserte la nota del tercer parcial de 0 a 100: ")

promedio = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3))/3
alert(promedio.toFixed(2))

if (0 <= promedio && promedio < 65){
    alert('Pasó raspando')
}
if (65 <= promedio && promedio <= 85){
    alert('No está mal')
}
if (85 < promedio && promedio <= 99){
    alert('Muy bien')
}
if (promedio == "100"){
    alert('Excelente, te ganaste un abrazo :)')
}
