var darkMode = false;

function darkLight() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (darkMode == false) {
        darkMode = true;
        document.getElementById("darkSwitch").src="assets/sun.png";
    } else {
        darkMode = false;
        document.getElementById("darkSwitch").src="assets/moon.png";
    }
}