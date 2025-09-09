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

function closeAllProjectCards() {
  let elements = document.querySelectorAll(".projects__card");
  elements.forEach((el) => (el.style.display = "none"));
}

function closeAllCodeViewers() {
  let elements = document.querySelectorAll(".projects__code-card");
  elements.forEach((el) => (el.style.display = "none"));
  let buttons = document.querySelectorAll('[onclick*="toggleCodeVisibility"]');
  buttons.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

function toggleCardVisibility(uiElement) {
  const el = document.getElementById(uiElement);
  const isHidden = getComputedStyle(el).display === "none";
  const toggleButton = document.querySelector(`[aria-controls="${uiElement}"]`);

  changeCSSofElements(
    el,
    "input",
    "border",
    "1px solid var(--text-light-grey)"
  );

  removeContentFromUI(`#${uiElement} .projects__card__container__output`);
  closeAllProjectCards();
  closeAllCodeViewers();

  if (isHidden) {
    el.style.display = "block";
    if (toggleButton) {
      toggleButton.setAttribute("aria-expanded", "true");
      toggleButton.setAttribute(
        "aria-label",
        "Hide Caesar cipher interactive demo"
      );
    }
  } else {
    if (toggleButton) {
      toggleButton.setAttribute("aria-expanded", "false");
      toggleButton.setAttribute(
        "aria-label",
        "Show Caesar cipher interactive demo"
      );
    }
  }
}

const codeFileMapping = {
  "caesar-cipher-code": "scripts/caesarsCipher.js",
  "check-pattern-code": "scripts/hackerrankTraining/checkIfContainsPattern.js",
  "counter-changes-code": "scripts/hackerrankTraining/counterChangesPattern.js",
  "day-programmer-code": "scripts/hackerrankTraining/dayOfProgramer.js",
  "count-pairs-code": "scripts/hackerrankTraining/countPairs.js",
  "find-missing-code": "scripts/hackerrankTraining/findMissingElements.js",
  "insertion-sort-code": "scripts/hackerrankTraining/insertionToSortArray.js",
  "pangram-code": "scripts/hackerrankTraining/pangram.js",
  "search-position-code": "scripts/hackerrankTraining/searchPositionOfSum.js",
  "sort-string-code": "scripts/hackerrankTraining/sortStringNumbers.js",
  "click-outside-code":
    "scripts/webDevelopmentFunctionality/clickOutsideHandler.ts",
  "fizz-buzz-code": "scripts/javaScript-training/FizzBuzz.js",
  "reverse-text-code": "scripts/javaScript-training/reverseText.js",
  "find-max-code": "scripts/javaScript-training/findMax.js",
  "reverse-word-code": "scripts/javaScript-training/reverseWord.js",
  "hiking-path-code": "scripts/hackerrankTraining/hikingPath.js",
};

async function loadCodeFromFile(filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const code = await response.text();
    return code;
  } catch (error) {
    console.error("Error loading code file:", error);
    return `/* Error loading code from ${filePath} */\n// Please check if the file exists and is accessible.`;
  }
}

function updateCodeDisplay(codeCardId, code) {
  const codeCard = document.getElementById(codeCardId);
  const preElement = codeCard.querySelector("pre code");
  if (preElement) {
    preElement.textContent = code;
  }
}

async function toggleCodeVisibility(codeCardId) {
  const codeCard = document.getElementById(codeCardId);
  const isHidden = getComputedStyle(codeCard).display === "none";
  const toggleButton = document.querySelector(
    `[aria-controls="${codeCardId}"]`
  );

  closeAllProjectCards();
  closeAllCodeViewers();

  if (isHidden) {
    const filePath = codeFileMapping[codeCardId];
    if (filePath) {
      const code = await loadCodeFromFile(filePath);
      updateCodeDisplay(codeCardId, code);
    }

    codeCard.style.display = "block";
    codeCard.scrollIntoView({ behavior: "smooth" });

    if (toggleButton) {
      toggleButton.setAttribute("aria-expanded", "true");
      const functionName = toggleButton
        .getAttribute("aria-label")
        .replace("Show ", "")
        .replace(" code", "");
      toggleButton.setAttribute("aria-label", `Hide ${functionName} code`);
    }
  } else {
    if (toggleButton) {
      toggleButton.setAttribute("aria-expanded", "false");
      const functionName = toggleButton
        .getAttribute("aria-label")
        .replace("Hide ", "")
        .replace(" code", "");
      toggleButton.setAttribute("aria-label", `Show ${functionName} code`);
    }
  }
}
