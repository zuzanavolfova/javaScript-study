const isClickInside = (
  target: HTMLElement,
  elements: HTMLElement[]
): boolean => {
  return elements.some((element) => element.contains(target));
};

const isClickExcluded = (
  target: HTMLElement,
  excludeSelectors: string[]
): boolean =>
  excludeSelectors.some((selector) => target.classList.contains(selector));

export const createClickOutsideHandler = (
  elementSelectors: string[],
  excludeSelectors: string[],
  stateToToggle: boolean
): ((event: MouseEvent) => void) => {
  return (event: MouseEvent): void => {
    const target = event.target as HTMLElement;

    if (isClickExcluded(target, excludeSelectors)) {
      return;
    }

    const insideElements: HTMLElement[] = elementSelectors.flatMap((selector) =>
      Array.from(document.querySelectorAll<HTMLElement>(selector))
    );

    if (!isClickInside(target, insideElements)) {
      stateToToggle = false;
    }
  };
};
