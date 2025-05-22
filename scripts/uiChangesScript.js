function addContentToUI(data, uiElement) {
  const outputUI = document.querySelector(`${uiElement}`);
  outputUI.innerHTML = data;
}

function removeContentFromUI(uiElement) {
  const outputUI = document.querySelector(`${uiElement}`);
  if (outputUI) outputUI.innerHTML = "";
}

function changeCSSofElements(parent, selector, property, value) {
  const el = parent.querySelectorAll(selector);

  el.forEach((el) => {
    el.value = "";
    el.style[property] = value;
  });
}

function closeAllCards() {
  let elements = document.querySelectorAll(".projects__card");
  elements.forEach((el) => (el.style.display = "none"));
}

function toggleCardVisibility(uiElement) {
  const el = document.getElementById(uiElement);
  const isHidden = getComputedStyle(el).display === "none";

  changeCSSofElements(
    el,
    "input",
    "border",
    "1px solid var(--text-light-grey)"
  );

  removeContentFromUI(`#${uiElement} .projects__card__container__output`);
  closeAllCards();

  if (isHidden) {
    el.style.display = "block";
  }
}
