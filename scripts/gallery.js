const popup = document.querySelector(".popup");
popup.addEventListener('click', function(evt) {
    if (evt.target === popup) {
        closePopup(popup);
    }
    evt.stopPropagation();
});

const popupImg = document.querySelector(".popup__image");
const images = document.querySelectorAll(".gallery__item");
const popupLeftLink = document.querySelector(".popup__link_left");
const popupRightLink = document.querySelector(".popup__link_right");

images.forEach(function(imageElement) {
    const link = imageElement.src;
    imageElement.addEventListener('click', function() {
        popupImg.src = link;
        checkLinks(imageElement);
        popup.classList.add('popup_active');
        imageElement.classList.add("current");
    });
})

popupLeftLink.addEventListener('click', function () {
    const imageElement = document.querySelector(".current");
    imageElement.classList.remove("current");
    const leftSibling = imageElement.previousElementSibling;
    leftSibling.classList.add("current");
    popupImg.src = leftSibling.src;
    checkLinks(leftSibling);
});

popupRightLink.addEventListener('click', function () {
    const imageElement = document.querySelector(".current");
    imageElement.classList.remove("current");
    const rightSibling = imageElement.nextElementSibling;
    rightSibling.classList.add("current");
    popupImg.src = rightSibling.src;
    checkLinks(rightSibling);
});

function checkLinks(imageElement) {
    if (!imageElement.nextElementSibling) {
        popupRightLink.setAttribute('style', 'display: none');
    } else {
        popupRightLink.setAttribute('style', 'display: block');
    }
    if (!imageElement.previousElementSibling) {
        popupLeftLink.setAttribute('style', 'display: none');
    } else {
        popupLeftLink.setAttribute('style', 'display: block');
    }
}

function closePopup(popup) {
    popup.classList.remove('popup_active');
    const currentImage = document.querySelector('.current');
    if (currentImage) {
        currentImage.classList.remove("current");
    }
}