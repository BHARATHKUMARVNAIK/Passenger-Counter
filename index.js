
/* document.getElementById("count").innerHTML = 10;

let myAge = 20;
let dogHumanRatio = 7;
let myDogAge = myAge * dogHumanRatio;

console.log(myDogAge);

function Increment(){
    console.log("button was clicked ");
}
Increment();
*/ 
let coutElement = document.getElementById("count-el");
let saveElement = document.getElementById("save-el");
let messageElement = document.createElement("p");
document.body.appendChild(messageElement);

let count = 0;

function Increment(){
    count = count + 1;
    coutElement.innerText = count;
};

function save(){
    let countStr = count + " ";
    saveElement.textContent += countStr + " - ";
    coutElement.textContent = countStr;
    count = 0;
}
save();

function refresh(){
    count = 0;
    coutElement.innerText = count;
    saveElement.textContent = "Previous-Entres : ";
    alert("new set Begins");
    console.log("start again");
    showMessage("Next set");
}
refresh();

function showMessage(message) {
    messageElement.innerText = message;
    messageElement.style.display = "block";
    messageElement.style.position = "fixed";
    messageElement.style.top = "20px";
    messageElement.style.right = "20px";
    messageElement.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    messageElement.style.color = "white";
    messageElement.style.padding = "10px 20px";
    messageElement.style.borderRadius = "5px";
    messageElement.style.zIndex = "1000";
    
    setTimeout(() => {
        messageElement.style.display = "none";
    }, 2000); // Hide the message after 2 seconds
}

