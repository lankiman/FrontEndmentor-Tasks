const toggleSwitch = document.getElementById("theme-switch");
const currentTheme = localStorage.getItem("theme");
const currentThemeText = document.getElementById("switchText");
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    currentThemeText.textContent = "Light Mode";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    currentThemeText.textContent = "Dark Mode";
  }
}
toggleSwitch.addEventListener("change", switchTheme);
