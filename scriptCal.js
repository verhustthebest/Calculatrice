// sélect écran
const monitor = document.getElementById("monitor")

// select boutons
const buttons = document.querySelectorAll("button")

//Parcourir les bouton
buttons.forEach(function(button){

button.addEventListener("click", function(){
const value = button.textContent

// btn clear
if(value === "C"){
monitor.value = ""
return
}

// btn égal
if(value === "="){
monitor.value = eval(monitor.value)
return
}

// ajouter le chiffre à l'écran
monitor.value += value
})
})

//Listern Clavier (Envent)
document.addEventListener("keydown", function(event){
const key = event.key

//If chiffre or sign
if("0123456789+-*/.".includes(key)){
monitor.value += key
}
//If clavier enter
if(key === "Enter"){
monitor.value = eval(monitor.value)
}

//If ESC : efface all
if(key === "Escape"){
monitor.value = ""
}

//If Space

//Other touche
})