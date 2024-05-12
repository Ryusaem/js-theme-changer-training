const themeName = document.querySelector(".theme-name");
const toggleButton = document.querySelector(".theme-toggle");
const rootElement = document.documentElement;

let currentTheme = localStorage.getItem("theme") || "light"; // Using 'let' to allow updates
themeName.textContent = currentTheme; // Set the display text
rootElement.classList.add(currentTheme); // Apply the initial theme class

toggleButton.addEventListener("click", () => {
  const newTheme = themeName.textContent === "light" ? "dark" : "light"; // Determine the new theme based on the current one
  themeName.textContent = newTheme; // Update the display text

  rootElement.classList.replace(currentTheme, newTheme); // Replace the current theme class with the new one
  localStorage.setItem("theme", newTheme); // Save the new theme to localStorage
  currentTheme = newTheme; // Update the currentTheme variable to the new theme
});
