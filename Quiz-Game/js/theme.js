const themeToggle = document.querySelector(".js-themeToggle, #theme-toggle");

// Apply the saved theme when the page loads
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

if (themeToggle) {
  themeToggle.setAttribute(
    "aria-pressed",
    String(savedTheme === "dark")
  );

  themeToggle.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    themeToggle.setAttribute("aria-pressed", String(isDarkMode));
  });
}