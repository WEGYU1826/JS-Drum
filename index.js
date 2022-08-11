
var buttonLength = document.querySelectorAll(".drum").length;

for(var i=0;i<buttonLength;i++){

    document.querySelectorAll("button")[i].addEventListener("click" , function (){
        // Ananomes Function
        // alert("I got click!")

        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();

        // this.style.color = "white";

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

}

document.addEventListener("keypress",function (event){
    var keyInnerHTML = event.key;
    makeSound(keyInnerHTML);
    buttonAnimation(keyInnerHTML);
})

function makeSound(choiseButton){
    switch (choiseButton) {
        case "w":
            var tome1 = new Audio("sounds/tom-1.mp3");
            tome1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;            
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        default:
            console.log("buttonInnerHTML");
            break;
    }

}

function buttonAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");

    setTimeout(function (){
        document.querySelector("."+currentKey).classList.remove("pressed");
    },100);
}
