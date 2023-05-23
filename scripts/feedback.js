const feedbackPopup = document.querySelector(".form-popup");
const successfulSubmit = document.querySelector('.intrusive-popup_submit-successful');
const successfulSubmitCB = successfulSubmit.querySelector(".intrusive-popup__close");
function openSubmitWindow() {
    successfulSubmit.classList.add('intrusive-popup_active');
}

function closeSubmitWindow() {
    successfulSubmit.classList.remove('intrusive-popup_active');
}

successfulSubmitCB.addEventListener("click", function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    closeSubmitWindow();
})

feedbackPopup.addEventListener('click', function(evt) {
    if (evt.target === feedbackPopup) {
        closePopup(feedbackPopup);
    }
    evt.stopPropagation();
});
const feedbackButton = document.querySelector(".footer__button_feedback");
feedbackButton.addEventListener('click', function () {
    feedbackPopup.classList.add('popup_active');
})

const feedbackForm = feedbackPopup.querySelector(".form-popup__form_feedback");
feedbackForm.addEventListener('submit', async function () {
    const phone = feedbackPopup.querySelector(".form-popup__input[id='phone']");
    const email = feedbackPopup.querySelector(".form-popup__input[id='email']");
    const text = feedbackPopup.querySelector(".form-popup__input[id='text']");
    return await fetch("", {
        method: "POST",
        body: JSON.stringify({
            tel: phone.value,
            email: email.value,
            text: text.value
        })
    }).then(function () {
        closePopup(feedbackPopup);
        openSubmitWindow();
    }).catch(function (error) {
        alert(error)
    })
});



function hasInvalidInput(inputs) {
    return inputs.some(function(inputElement) {
        return !inputElement.validity.valid ||
            (inputElement.type === "tel" && !validateTel(inputElement)) ||
            (inputElement.type === "email" && !validateEmail(inputElement));
    });
}

function showInputError(element, errorSpan) {
    element.classList.add('form-popup__input_error');
    errorSpan.classList.add('form-popup__error_active');
}

function hideInputError(element, errorSpan) {
    element.classList.remove('form-popup__input_error');
    errorSpan.classList.remove('form-popup__error_active');
}

function toggleSubmit(inputs, button) {
    if (hasInvalidInput(inputs)) {
        button.classList.add('button_inactive');
        button.disabled = true;
    } else {
        console.log('valid');
        button.classList.remove('button_inactive');
        button.disabled = false;
    }
}

const form = document.querySelector('.form-popup__form_feedback')
form.addEventListener('submit', function (evt) {
    evt.preventDefault();
});

enableValidation(form)

const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
function validateEmail(inputElement) {
    return emailPattern.test(inputElement.value);

}

const phonePattern = /^\d{11}$/;
function validateTel(inputElement) {
    return phonePattern.test(inputElement.value);

}

function isValid(inputElement, spanError) {
    if (!inputElement.validity.valid ||
        (inputElement.type === "tel" && !validateTel(inputElement) ||
            (inputElement.type === "email" && !validateEmail(inputElement)))) {
        showInputError(inputElement, spanError);
    } else {
        hideInputError(inputElement, spanError);
    }
}

function enableValidation(form) {
    const inputs = Array.from(form.querySelectorAll('.form-popup__input'));
    const spans = form.querySelectorAll('.form-popup__error');
    const buttonSubmit = form.querySelector('.form-popup__submit-button');
    for (let i = 0; i < inputs.length; ++i) {
        inputs[i].addEventListener('input', function() {
            isValid(inputs[i], spans[i]);
            toggleSubmit(inputs, buttonSubmit);
        })
    }
}