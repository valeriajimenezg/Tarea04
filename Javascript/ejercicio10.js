let variable1;
variable1 = prompt("Digite un año: ")

if ( variable1 % 4 == 2){
    alert("En el año " + variable1 + " hubo o habrá un mundial de fútbol.")
} else if ( variable1 % 4 != 2){
    alert("En el año " + variable1 + " no hubo o no habrá un mundial de fútbol.")
}