function changeMode(class_name, first_mode = "grey-mode", second_mode = "less-black-mode") {
    let element_arr = document.querySelectorAll('.' + class_name);
    element_arr.forEach((element) => {
        element.classList.toggle(first_mode);
        element.classList.toggle(second_mode);
    });
}
function changeTheme() {
    changeMode("page", "white-mode", "black-mode");
    changeMode("menu__item", "white-mode", "black-mode");
    changeMode("header");
    changeMode("skills");
}

const change_theme_button = document.querySelector(".menu__button");
change_theme_button.addEventListener("click", changeTheme);