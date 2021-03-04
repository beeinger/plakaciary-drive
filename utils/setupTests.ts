import "@testing-library/jest-dom";
import "regenerator-runtime/runtime";
import "jest-styled-components";

const foo = () => {};
Object.defineProperty(window, "scrollTo", { value: foo, writable: true });
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    matches: false,
  })),
});

// @ts-ignore
global.IntersectionObserver = class IntersectionObserver {
  constructor(
    private func: (
      arg0: { isIntersecting: boolean; target: HTMLElement }[]
    ) => void,
    private options: any
  ) {}

  observe(element: HTMLElement) {
    this.func([{ isIntersecting: true, target: element }]);
  }

  disconnect() {
    return null;
  }

  unobserve() {
    return null;
  }
};

// @ts-ignore
global.console = {
  log: console.log,
  error: console.error,
  // Ignoring warnings
  warn: jest.fn(),
  info: console.info,
  debug: console.debug,
};
