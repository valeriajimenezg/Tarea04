let edad = prompt ('Inserte la edad: ')

if (edad <= 3){
  alert("Eres un bebé")  
}else if(edad >= 4 && edad <= 12){
  alert("Eres un niño")
}else if(edad >= 12 && edad <= 18){
  alert("Eres un adolescente")
}else if(edad >= 18 && edad <= 65){
  alert("Eres un adulto")
}else if(edad >= 65){
  alert("Eres un adulto mayor")
}