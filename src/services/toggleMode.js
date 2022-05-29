const theme = localStorage.getItem("algoxTheme");

export default function setTheme(themeType) {

    if (themeType == "dark") {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        localStorage.setItem("algoxTheme","dark");
    }

    if (themeType== "light") {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        localStorage.setItem("algoxTheme","light");
    }


}

