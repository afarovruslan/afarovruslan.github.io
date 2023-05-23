function changeMode(class_name, first_mode = "grey-mode", second_mode = "less-black-mode") {
    let element_arr = document.querySelectorAll('.' + class_name);
    element_arr.forEach((element) => {
        element.classList.toggle(first_mode);
        element.classList.toggle(second_mode);
    });
}

function changeTheme() {
    console.log(localStorage.getItem("is_black"));
    changeMode("page", "white-mode", "black-mode");
    changeMode("menu__item", "white-mode", "black-mode");
    changeMode("header");
    changeMode("skills");
    if (localStorage.getItem("is_black") === "0") {
        localStorage.setItem("is_black", "1");
        console.log("set black");
    } else {
        localStorage.setItem("is_black", "0");
        console.log("set white");
    }
    console.log(localStorage.getItem("is_black"));
}

const change_theme_button = document.querySelector(".menu__button");
change_theme_button.addEventListener("click", changeTheme);

function setTheme() {
    if (localStorage.getItem("is_black") === "1") {
        console.log("изначально черный")
        changeTheme();
        localStorage.setItem("is_black", "1");
    } else {
        console.log("изначально белый");
    }
}

setTheme();