let productForm = document.getElementById('form-product');
let inputsProduct = document.querySelectorAll('#form-product input');
let errorMessage = document.getElementById("error-message");

const nameRegex = /^[A-ZÁÉÍÓÚÑ]?[a-záéíóúñ]{6,10}$/gm;
const stockRegex = /^\d{2,3}x\d{2,3}cm$/gm;
const typeRegex = /^\d{2,3}x\d{2,3}cm$/gm;
const priceRegex = /^\d+(\.\d{2})?$/gm;
const photoRegex = /^.+\.jpg$/gm;


document.addEventListener('DOMContentLoaded', function () {
    productForm.addEventListener("submit", (e) => {

        let isValid = true;

        if (e.target[0].name === 'name') {
            let nombre = e.target[0].value;
            if (nombre.match(nameRegex)) {
                errorMessage.innerHTML = "";
            } else {
                errorMessage.innerHTML = "<p>El nombre no está escrito correctamente.</p>";
                isValid = false; // Marcar como no válido
            }
        } 
        
        if (e.target[1].name === 'type') {
            let type = e.target[1].value;
            if (type.match(typeRegex)) {
                errorMessage.innerHTML = "";
            } else {
                errorMessage.innerHTML = "<p>El tipo no está escrito correctamente, ej: '45x45cm'.</p>";
                isValid = false; // Marcar como no válido
            }
        }
         if (e.target[2].name === 'price') {
            let price = e.target[2].value;
            if (price.match(priceRegex)) {
                errorMessage.innerHTML = "";
            } else {
                errorMessage.innerHTML = "<p>El precio no está escrito correctamente.</p>";
                isValid = false; // Marcar como no válido
            }
        }
         if (e.target[3].name === 'stock') {
            let stock = e.target[3].value;
            if (stock.match(stockRegex)) {
                errorMessage.innerHTML = "";
            } else {
                errorMessage.innerHTML = "<p>El número no está escrito correctamente.</p>";
                isValid = false; // Marcar como no válido
            }
        }
         if (e.target[4].name === 'photo') {
            let photo = e.target[4].value;
            if (photo.match(photoRegex)) {
                errorMessage.innerHTML = "";
            } else {
                errorMessage.innerHTML = "<p>Solo admite archivo en formato '.jpg'.</p>";
                isValid = false; // Marcar como no válido
            }
        }
        
        if (!isValid) {
            e.preventDefault(); // Evitar el envío del formulario si no es válido
        } else {
            // Si el formulario es válido, muestra el mensaje de éxito
            document.getElementById('submit-message').textContent = "¡El producto fue añadido correctamente!";
        }
    });

});
