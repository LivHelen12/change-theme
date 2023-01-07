const inputContainer = document.querySelector("input");
const rootElement = document.documentElement;

window.onload = getThemeFromLocalStorage;

const lightTheme = {
  "--background-color": "#efefef",
  "--text-color": "#030303",
  "--background-button": "#5f9ea0",
}

const darkTheme = {
  "--background-color": "#28203e",
  "--text-color": "#fff",
  "--background-button": "#6860d8",
}

inputContainer.addEventListener("change", () => {
  const isChecked = inputContainer.checked === true;

  isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme);
});

function changeTheme(theme) {
  for([property, value] of Object.entries(theme)) {
    setStyleProp(property, value);
  }

  saveThemeToLocalStorage(theme);
}

function setStyleProp(property, value) {
  rootElement.style.setProperty(property, value);
}

function saveThemeToLocalStorage(theme) {
  localStorage.setItem("theme", JSON.stringify(theme));
}

function getThemeFromLocalStorage() {
 const theme = JSON.parse(localStorage.getItem("theme"));
 
 if(isThemeEqual(theme, darkTheme)) inputContainer.checked = true;
 changeTheme(theme);
}

function isThemeEqual(firstTheme, secondTheme) {
  for(let prop in firstTheme) {
    if(firstTheme[prop] !== secondTheme[prop]) return false;
  }
  return true;
}