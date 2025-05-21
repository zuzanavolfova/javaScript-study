function addContentToUI(data, uiElement) {
  const outputUI = document.querySelector(`${uiElement}`);
  outputUI.innerHTML = data;
}

function closeAllCards() {
  let elements = document.querySelectorAll(".projects__card");
  elements.forEach((el) => (el.style.display = "none"));
}

function toggleCardVisibility(uiElement) {
  const el = document.getElementById(uiElement);
  const isHidden = getComputedStyle(el).display === "none";

  closeAllCards();

  if (isHidden) {
    el.style.display = "block";
  }
}
