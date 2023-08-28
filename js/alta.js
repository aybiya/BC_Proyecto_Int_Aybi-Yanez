let productForm = document.getElementById('form-product');
let inputsProduct = document.querySelectorAll('#form-product input');
let errorMessage = document.getElementById("error-message");

const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]{6,}$/gm;
const stockRegex = /^\d{1,3}(?:\.\d{3})*$/gm;
const typeRegex = /^\d{2,3}x\d{2,3}cm$/gm;
const priceRegex = /^\$?\d{1,3}(?:\.\d{3})*$/gm;
const photoRegex = /^.+\.jpg$/gm;


document.addEventListener('DOMContentLoaded', function () {
    productForm.addEventListener("submit", (e) => {

        let isValid = true;
        let errorMessages = []; // Aquí almacenamos los mensajes de error


        if (e.target[0].name === 'name') {
            let nombre = e.target[0].value;
            if (nombre.match(nameRegex)) {
                errorMessage.innerHTML = "";
            } else {
                errorMessages.push("El nombre no está escrito correctamente.");
                isValid = false; // Marcar como no válido
            }
        } 
        
        if (e.target[1].name === 'type') {
            let type = e.target[1].value;
            if (type.match(typeRegex)) {
                errorMessage.innerHTML = "";
            } else {
                errorMessages.push("El tipo no está escrito correctamente, ej: '45x45cm'.");
                isValid = false; // Marcar como no válido
            }
        }
         if (e.target[2].name === 'price') {
            let price = e.target[2].value;
            if (price.match(priceRegex)) {
                errorMessage.innerHTML = "";
            } else {
                errorMessages.push("El precio no está escrito correctamente, ej '$2.000'.");
                isValid = false; // Marcar como no válido
            }
        }
         if (e.target[3].name === 'stock') {
            let stock = e.target[3].value;
            if (stock.match(stockRegex)) {
                errorMessage.innerHTML = "";
            } else {
                errorMessages.push("El stock no es válido.");
                isValid = false; // Marcar como no válido
            }
        }
         if (e.target[4].name === 'photo') {
            let photo = e.target[4].value;
            if (photo.match(photoRegex)) {
                errorMessage.innerHTML = "";
            } else {
                errorMessages.push("Solo admite archivo en formato'.jpg'");
                isValid = false; // Marcar como no válido
            }
        }
        
        
        // Validación de la categoría
        const rigidRadio = e.target['rigid'];
        const flexibleRadio = e.target['flexible'];

        if (!rigidRadio.checked && !flexibleRadio.checked) {
            errorMessages.push("Debes seleccionar una categoría.");
            isValid = false; // Marcar como no válido
        } else {
            errorMessages.push(""); // Agrega una cadena vacía al array de mensajes de error
        }
 

        // Mostrar todos los mensajes acumulados en errorMessage
        errorMessage.innerHTML = errorMessages.map(message => `<li>${message}</li>`).join('');

        if (!isValid) {
            e.preventDefault(); // Evitar el envío del formulario si no es válido
        } else {
            // Si el formulario es válido, muestra el mensaje de éxito
            document.getElementById('submit-message').textContent = "¡El producto fue añadido correctamente!";
        }
    });

});
