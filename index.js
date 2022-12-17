
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl=document.getElementById("passwordOne-el")
let passwordTwoEl=document.getElementById("passwordTwo-el")
let passwordLenght=15
let slider= document.getElementById("myRange")
let output= document.getElementById("slider-value")

slider.oninput = function() {
    output.textContent = this.value;
  }



function getRandomChar(){
    let randomChar= Math.floor( Math.random()*characters.length)
    return characters[randomChar]
}

function generatePassword(){
    let randomPassword= ""
    for(let i=0; i<passwordLenght; i++){
        randomPassword+= getRandomChar()
    }
    return randomPassword

    
}

function generatePasswords(){
    passwordOneEl.textContent=generatePassword()
    passwordTwoEl.textContent= generatePassword()
}

