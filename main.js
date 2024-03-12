// const bodyElement = document.querySelector("body");
const bodyElement2 = document.getElementById("body");
const changeBackgroundButtom = document.getElementById("change-bg");

const lightToDarkButton = document.getElementById("light-dark-toggle");
const hoverButton = document.getElementById("hover-button");

changeBackgroundButtom.addEventListener("click", function () {
    console.log(bodyElement2);
    console.log(changeBackgroundButtom);
    console.log(changeBackgroundButtom.textContent);
    bodyElement2.style.backgroundColor = "white";
});

function changeToDarkMode() {
    var mode = lightToDarkButton.textContent;
    if (mode === "Dark") {
        // Changing the button 
        lightToDarkButton.textContent = "Light";
        lightToDarkButton.style.backgroundColor = "white";
        lightToDarkButton.style.color = "black";
        lightToDarkButton.style.borderWidth = "1px";
        lightToDarkButton.style.borderColor = "black";
        lightToDarkButton.style.borderStyle = "solid";

        // Changing the body style
        bodyElement2.style.backgroundColor = "gray";
    } else if (mode === "Light") {
        // Changing the button 
        lightToDarkButton.textContent = "Dark";
        lightToDarkButton.style.backgroundColor = "black";
        lightToDarkButton.style.color = "white";
        lightToDarkButton.style.borderWidth = "0px";
        lightToDarkButton.style.borderColor = "none";
        lightToDarkButton.style.borderStyle = "none";

        // Changing the body style
        bodyElement2.style.backgroundColor = "white";
    }
}

function handleFormInput(e){
    console.log("Hello");
    console.log(e);
};

lightToDarkButton.addEventListener("click", changeToDarkMode);
hoverButton.addEventListener("mouseover", changeToDarkMode);