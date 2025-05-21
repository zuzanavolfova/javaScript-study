function addContentToUI(data, uiElementClass) {
  const outputUI = document.querySelector(`.${uiElementClass}`);
  outputUI.innerHTML = data;
}
