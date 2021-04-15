const toogleImage = document.getElementById("toogle-img");
const btn = document.querySelector("#theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
    toogleImage.src = "../assests/sun.svg";
} else if (currentTheme == "light") {
    document.body.classList.toggle("light-theme");
    toogleImage.src = "../assests/moon.svg";
}

btn.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        var theme = document.body.classList.contains("light-theme") ? "light": "dark";
    } else {
        document.body.classList.toggle("dark-theme");
        var theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    }
    if(theme === "light"){
        toogleImage.src = "../assests/moon.svg";
    }else{
        toogleImage.src = "../assests/sun.svg";
    }
    localStorage.setItem("theme", theme);
});