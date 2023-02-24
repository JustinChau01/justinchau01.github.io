
function bigger(){
    let text = document.getElementById("plain");
    text.style.fontSize = "24pt";
}

function bold(){
    let text = document.getElementById("plain");
    text.style.fontWeight = "bold";
    text.style.color = "blue";
    text.style.textDecoration = "underline";
}

function boring(){
    let text = document.getElementById("plain");
    text.style.fontWeight = "normal"
    text.style.fontSize = "initial";
    text.style.color = "black";
    text.style.textDecoration = "none";
}

function moo(){
    let text = document.getElementById("plain");
    text.style.textTransform = "uppercase";
    text.value = text.value.split('.').join('.-Moo ');
}