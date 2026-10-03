import '@testing-library/jest-dom';

// Mock IntersectionObserver for Framer Motion whileInView support in JSDOM
class IntersectionObserverMock {
  constructor(callback) {
    this.callback = callback;
  }
  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
}

global.IntersectionObserver = IntersectionObserverMock;
window.IntersectionObserver = IntersectionObserverMock;
