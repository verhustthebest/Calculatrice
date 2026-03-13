// sélectionner l'écran de la calculatrice
const display = document.getElementById("display")

// sélectionner tous les boutons
const buttons = document.querySelectorAll("button")

// parcourir tous les boutons
buttons.forEach(function(button){

button.addEventListener("click", function(){

const value = button.textContent

// bouton clear
if(value === "C"){
display.value = ""
return
}

// bouton égal
if(value === "="){

display.value = eval(display.value)
return

}

// ajouter le chiffre à l'écran
display.value += value

})

})