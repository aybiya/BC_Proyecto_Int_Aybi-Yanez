let contactForm = document.getElementById('contact-form');
let inputsContact = document.querySelectorAll('#contact-form input');
let nameError = document.querySelector(".form__input-error-name");
let lastNameError = document.querySelector(".form__input-error-lastName");
let mailError = document.querySelector(".form__input-error-email");
let phoneError = document.querySelector(".form__input-error-phone");
let msgError = document.querySelector(".form__input-error-message");

const nameRegex = /^[A-ZÁÉÍÓÚÑ]?[a-záéíóúñ]{3,10}$/gm;
const lastNameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚ'’]{2,20}$/gm;
const mailRegex = /\S+@\S+\.\S+/gm;
const phoneRegex = /^\d{7,14}$/gm;
const msgRegex = /^[\w\W]{15,100}$/gm;


document.addEventListener('DOMContentLoaded', function () {

    contactForm.addEventListener("submit", (e) => {

        let isValid = true;

        if (e.target[0].name === 'name') {
            let nombre = e.target[0].value;
            if (nombre.match(nameRegex)) {
                nameError.innerHTML = "";
            } else {
                nameError.innerHTML = "<p>El nombre no está escrito correctamente.</p>";
                isValid = false; // Marcar como no válido
            }
        } 
        
        if (e.target[1].name === 'lastName') {
            let lastName = e.target[1].value;
            if (lastName.match(lastNameRegex)) {
                lastNameError.innerHTML = "";
            } else {
                lastNameError.innerHTML = "<p>El apellido no está escrito correctamente.</p>";
                isValid = false; // Marcar como no válido
            }
        }
         if (e.target[2].name === 'email') {
            let mail = e.target[2].value;
            if (mail.match(mailRegex)) {
                mailError.innerHTML = "";
            } else {
                mailError.innerHTML = "<p>El correo electrónico no está escrito correctamente.</p>";
                isValid = false; // Marcar como no válido
            }
        }
         if (e.target[3].name === 'phone') {
            let phone = e.target[3].value;
            if (phone.match(phoneRegex)) {
                phoneError.innerHTML = "";
            } else {
                phoneError.innerHTML = "<p>El número de teléfono no está escrito correctamente.</p>";
                isValid = false; // Marcar como no válido
            }
        }
         if (e.target[5].name === 'message') {
            let message = e.target[5].value;
            if (message.match(msgRegex)) {
                msgError.innerHTML = "";
            } else {
                msgError.innerHTML = "<p>Completar el campo con un mínimo de 10 y máximo de 200 caracteres</p>";
                isValid = false; // Marcar como no válido
            }
        }
        
        if (!isValid) {
            e.preventDefault(); // Evitar el envío del formulario si no es válido
        } else {
            // Si el formulario es válido, muestra el mensaje de éxito
            document.getElementById('form__message-ok').textContent = "¡Tu consulta fue enviada!";
        }
    });

});
