import { RibbonGenerator } from "./ribbon";

export default (() => {
  function setup(ribbon: Element) {
    const generator = new RibbonGenerator(ribbon as HTMLCanvasElement);
    generator.generate();

    window.addEventListener("click", () => {
      generator.generate();
    });
  }

  const target = document.querySelector("[data-ribbon]");
  target &&
    window.addEventListener("DOMContentLoaded", () => {
      setup(target);
    });
})();
