import buttonData from './buttonData.js';

document.addEventListener("DOMContentLoaded", function () {
    const block = document.querySelector(".block");
    const templateButton = document.getElementById("template");

    buttonData.forEach((data) => {
        const buttonClone = templateButton.cloneNode(true);
        buttonClone.classList.add(data.class);
        buttonClone.querySelector(".button-text").textContent = data.text;
        buttonClone.style.left = data.coords.x + "%";
        buttonClone.style.top = data.coords.y + "%";
        block.appendChild(buttonClone);
    });

    block.addEventListener("click", (event) => {
        const clickedButton = event.target.closest(".overlay-button");
        const allButtons = block.querySelectorAll(".overlay-button");
        if (clickedButton) {
            toggleButtonState(clickedButton);
        } else {
            allButtons.forEach((button) => {
                button.classList.remove("open");
                const verticalLine = button.querySelector(".line-vertical");
                const buttonText = button.querySelector(".button-text");
                buttonText.classList.remove("signature");
                verticalLine.classList.remove("signature");
            });
        }
    });

    const toggleButtonState = (button) => {
        const isButtonOpen = button.classList.toggle("open");
        const verticalLine = button.querySelector(".line-vertical");
        const buttonText = button.querySelector(".button-text");

        buttonText.classList.toggle("signature", isButtonOpen);
        verticalLine.classList.toggle("signature", isButtonOpen);
    };
});
