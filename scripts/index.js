
function ChangeMode(class_name, first_mode = "grey-mode", second_mode = "less-black-mode") {
    let element_arr = document.querySelectorAll('.' + class_name);
    element_arr.forEach((element) => {
        element.classList.toggle(first_mode);
        element.classList.toggle(second_mode);
    });
}
function ChangeTheme() {
    ChangeMode("page", "white-mode", "black-mode");
    ChangeMode("menu__item", "white-mode", "black-mode");
    ChangeMode("header");
    ChangeMode("skills");
}

const change_theme_button = document.querySelector(".dark_theme_button");
change_theme_button.addEventListener("click", ChangeTheme);


const rain_button = document.querySelector(".footer__button-beer");
let rain = document.querySelector(".rain");

rain_button.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (window.innerWidth >= 800) {
        rain.classList.add("rain_active");
        rain.classList.add("rain_animation");
    }
})

window.addEventListener('resize', function () {
    if (rain.classList.contains("rain_active")) {
        rain.classList.toggle("rain_animation");
    }
})

rain.addEventListener('click', function () {
    if (rain.classList.contains("rain_active")) {
        rain.classList.remove("rain_active");
    }
})