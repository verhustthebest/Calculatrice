// sélect écran
const monitor = document.getElementById("monitor")
// select boutons
const buttons = document.querySelectorAll("button")

//Parcourir les bouton
buttons.forEach(function(button){
// Event
button.addEventListener("click", function(){
const enterval = button.textContent

// btn clear
if(enterval === "C"){
monitor.value = ""
return
}

// btn égal
if(enterval === "="){
monitor.value = eval(monitor.enterval)
return
}

// ajouter le chiffre à l'écran
monitor.value += enterval
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
monitor.value = eval(monitor.enterval)
}

//If ESC : efface all
if(key === "Escape"){
monitor.value = ""
} 
})