let saludo;
saludo = prompt("Inserte un Buenos días, Buenas tardes o Buenas noches: ")

if ( saludo == "Buenos días" || saludo == "buenos días" || saludo == "buenos dias" || saludo == "Buenos dias" || saludo == "Buenos Dias" || saludo == "Buenos Días"){
    alert ("Buenos días!")
} else if ( saludo == "Buenas tardes" || saludo == "buenas tardes" || saludo == "Buenas Tardes"){
    alert ("Buenas tardes!")
} else if ( saludo == "Buenas noches" || saludo == "buenas noches" || saludo == "Buenas Noches"){
    alert ("Buenas noches!")
} else {
    alert ("Solo puedes decir: Buenos días o Buenas tardes o Buenas noches")
}