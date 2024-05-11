const themeName = document.querySelector(".theme-name");
const themeButton = document.querySelector(".theme-button");
const root = document.documentElement;

themeName.textContent = localStorage.getItem("theme") || "light";

themeButton.addEventListener("click", () => {
  if (themeName.textContent === "light") {
    root.classList.toggle("dark");
    themeName.textContent = "dark";
  } else {
    root.classList.toggle("dark");
    themeName.textContent = "light";
  }
});
