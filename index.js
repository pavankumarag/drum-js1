var buttons = document.querySelectorAll("button.drum")
for (i=0;i<buttons.length; i++){
    buttons[i].addEventListener("click", function () {
        var buttonText = this.innerHTML;
        this.style.color = "white";
        /*var audio_file = this.getAttribute("background-image");
        var audio = new Audio(audio_file);
        audio.play();*/
        makeSound(buttonText);
        buttonAnimation(buttonText);
    });
}
document.addEventListener("keypress", function(event){
    console.log(event.key);
    makeSound(event.key);
    buttonAnimation(event.key);
});
//document.querySelector("button").addEventListener("click", handleClick);
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case "1":
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
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
        default:
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
        break;


    }
}

function buttonAnimation(buttonContent){
    var activeButton = document.querySelector("."+buttonContent);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
/* using unanmysous function 
document.querySelector("button").addEventListener("click", function () {
    alert("I got clicked");
}); */

/* using separate functon
document.querySelector("button").addEventListener("click", handleClick();
function handleClick(){
    alert("I got clicked");
} */