const contactForm = document.querySelector("#contactForm")
const nomInput = document.querySelector("#nom")
const nomError = document.querySelector("#nomError")
const emailInput = document.querySelector("#email")
const emailError = document.querySelector("#emailError")
const telephoneInput = document.querySelector("#telephone")
const telephoneError = document.querySelector("#telephoneError")
const messageInput = document.querySelector("#message")
const messageError = document.querySelector("#messageError")
const formStatus = document.querySelector("#formStatus")

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const regexNom = /^[a-zA-ZÀ-ÿ\s'-]{2,}$/
const regexTelephone = /^0[567]\d{8}$/
const regexMessage = /^[\s\S]{10,}$/


contactForm.addEventListener("submit", function (event) {
    event.preventDefault()

    const nom = nomInput.value.trim()

    if (regexNom.test(nom) === false) {
        nomError.textContent = "Veuillez saisir un nom valide."
    } else {
        nomError.textContent = ""
    }

    const email = emailInput.value.trim()

    if (regexEmail.test(email) === false) {
        emailError.textContent = "Veuillez saisir une adresse email valide."
    } else {
        emailError.textContent = ""
    }

    const telephone = telephoneInput.value.trim()

    if (regexTelephone.test(telephone) === false) {
        telephoneError.textContent = "Veuillez saisir un numéro valide."
    } else {
        telephoneError.textContent = ""
    }

    const message = messageInput.value.trim()

    if (regexMessage.test(message) === false) {
        messageError.textContent = "Le message doit contenir au moins 10 caractères."
    } else {
        messageError.textContent = ""
    }

    if (
    regexNom.test(nom) && regexEmail.test(email) && regexTelephone.test(telephone) && regexMessage.test(message)
) {
    formStatus.textContent = "Formulaire validé avec succès."
    formStatus.className = "text-green-600 text-sm"
        contactForm.reset()
} else {
    formStatus.textContent = "Veuillez corriger les erreurs."
    formStatus.className = "text-red-600 text-sm"

}

})
