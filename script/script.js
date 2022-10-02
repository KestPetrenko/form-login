const form = document.forms[0];

form.passwordConfirmInput.addEventListener("input", function () {
   
    if (form.passwordConfirmInput.value != form.passwordInput.value) {
        form.passwordConfirmInput.setCustomValidity("Пароль и подтверждение пароля не совпадают.");
        form.passwordInput.setCustomValidity("Пароль и подтверждение пароля не совпадают.");
    }
    else {
        form.passwordConfirmInput.setCustomValidity(""); // убираем ошибку
        form.passwordInput.setCustomValidity("");
    }
});

form.login.addEventListener("change", function () {
    validateElement(form.login, "#loginError");
});

form.password.addEventListener("change", function () {
    validateElement(form.password, "#passwordError");
});

form.addEventListener("submit", function (e) {
    validateElement(form.login, "#loginError");
    validateElement(form.password, "#passwordError");

    let invalidElements = document.querySelectorAll(".invalid");
    if (invalidElements.length > 0) {
        e.preventDefault();
    }
    else {
        alert("Форма отправлена");
    }
});

function validateElement(element, errorElementSelector) {
    let errorElement = document.querySelector(errorElementSelector);

    element.classList.remove("valid");
    element.classList.remove("invalid");
    errorElement.style.display = "none";

    if (element.value.length > 0) {
        element.classList.add("valid");
    }
    else {
        element.classList.add("invalid");
        errorElement.style.display = "inline";
    }
}
