const rain_button = document.querySelector(".footer__button_beer");
let rain = document.querySelector(".rain");

rain_button.addEventListener('click', function () {
    if (window.innerWidth >= 800) {
        rain.classList.add("rain_active");
        rain.classList.add("rain_animation");
        rain_button.classList.add("none");
    }
})

window.addEventListener('resize', function () {
    if (rain.classList.contains("rain_active")) {
        rain.classList.toggle("rain_animation");
        rain_button.classList.remove("none");
    }
})

rain.addEventListener('click', function () {
    if (rain.classList.contains("rain_active")) {
        rain.classList.remove("rain_active");
        rain_button.classList.remove("none");
    }
})