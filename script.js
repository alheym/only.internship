document.addEventListener("DOMContentLoaded", function () {
  const block = document.querySelector(".block");
  const templateButton = document.getElementById("template");

  const buttonData = [
    { class: "blue", text: "ЖД станция", coords: { x: 30.208, y: 26.111 } },
    { class: "blue", text: "Главный вход", coords: { x: 23.229, y: 66.111 } },
    {
      class: "blue",
      text: "Тренажерный зал",
      coords: { x: 56.354, y: 58.426 },
    },
    { class: "blue", text: "Жилые районы", coords: { x: 71.302, y: 20.833 } },
    {
      class: "blue",
      text: "Культурный центр",
      coords: { x: 73.646, y: 43.981 },
    },
    { class: "blue", text: "Комплекс 2", coords: { x: 82.812, y: 66.018 } },
    {
      class: "green",
      text: "Медицинский центр",
      coords: { x: 59.896, y: 37.407 },
    },
    { class: "green", text: "Комплекс 1", coords: { x: 67.708, y: 61.806 } },
    {
      class: "green",
      text: "Жилые комплексы",
      coords: { x: 57.552, y: 72.685 },
    },
  ];

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
