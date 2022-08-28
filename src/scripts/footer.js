export default (() => {
  const currentYear = new Date().getFullYear();
  const target = document.querySelector("[data-current-year]");
  target &&
    window.addEventListener("DOMContentLoaded", () => {
      target.innerHTML = `${currentYear}`;
    });
})();
