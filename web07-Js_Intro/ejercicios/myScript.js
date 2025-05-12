function saludar(){
    alert("ya casi nos vamos al segundo descanso");
}

function cambioDeColorFondo(color){
    document.body.style.backgroundColor = color;
}

function changeToRedColor(){
    const element = document.getElementById("redParagraph");
    console.log(element);
    element.style.color="red";
}

function changeColor(element,color){
    element.style.color= color;
}

function setUp(){
    document.getElementById("title").style.color= "orange";
    document.getElementById("title").style.fontSize = "50px";
}
setUp();