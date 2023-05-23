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
    if (!localStorage["is_black"]) {
        console.log('set black')
        localStorage["is_black"] = true;
    }
    else if (localStorage["is_black"]) {
        localStorage["is_black"] = false;
        console.log('set white');
    }
    console.log(localStorage.getItem("is_black"));
}

const change_theme_button = document.querySelector(".menu__button");
change_theme_button.addEventListener("click", changeTheme);

function setTheme() {
    console.log(localStorage.getItem("is_black"));
    if (localStorage.getItem("is_black")) {
        console.log('notice black');
        changeTheme();
    }
}

setTheme();