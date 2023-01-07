const inputContainer = document.querySelector("input");
const rootElement = document.documentElement;

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

}
