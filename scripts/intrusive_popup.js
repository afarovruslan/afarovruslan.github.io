const popupIntrusiveEl = document.querySelector(".intrusive-popup");
const popupIntrusiveContainer = popupIntrusiveEl.querySelector(".intrusive-popup__container");
const popupIntrusiveCB = popupIntrusiveEl.querySelector(".intrusive-popup__close");

const popupIntrusiveOpen = function() {
    popupIntrusiveEl.classList.add("intrusive-popup_active");
}

const popupIntrusiveClose = function() {
    popupIntrusiveEl.classList.remove("intrusive-popup_active");
}

const popupIntrusiveOpenFirst = function () {
    if (!localStorage.getItem("is-intrusive-opened")) {
        console.log("start");
        setTimeout(popupIntrusiveOpen, 30000);
    }
}
popupIntrusiveOpenFirst();

popupIntrusiveCB.addEventListener("click", function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    localStorage.setItem("is-intrusive-opened", "true");
    popupIntrusiveClose();
})

popupIntrusiveContainer.addEventListener("click", function(evt) {
    evt.stopPropagation();
});

popupIntrusiveEl.addEventListener("click", function(evt) {
    popupIntrusiveClose();
    evt.stopPropagation();
})