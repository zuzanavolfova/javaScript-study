function addContentToUI(data, uiElement) {
  const outputUI = document.querySelector(`${uiElement}`);
  outputUI.innerHTML = data;
}
