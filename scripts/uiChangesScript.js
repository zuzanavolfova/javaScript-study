function addContentToUI(data, uiElement) {
  const outputUI = document.querySelector(`${uiElement}`);
  outputUI.innerHTML = data;
}
function toggleElVisibility(uiElement) {
  let element = document.getElementById(uiElement);
  element.style.display = element.style.display === "block" ? "none" : "block";
}
