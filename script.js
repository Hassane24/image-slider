const buttons = document.querySelectorAll("[data-slider-button]");
const circles = document.querySelectorAll("[data-circle]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.sliderButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-slider]")
      .querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

//setInterval(changeSlide, 5000);

function changeSlide() {
  buttons.forEach((button) => {
    const slides = button
      .closest("[data-slider]")
      .querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + 1;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
}

changeSlide();
