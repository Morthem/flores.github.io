(function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        // Evitando el envio del formulario
        event.preventDefault();

        let isValid = true;
        // Limpiando mensajes de error
        document.getElementById('nameError').innerText = '';
        document.getElementById('emailError').innerText = '';
        document.getElementById('messageError').innerText = '';

        // Validando que el nombre no esta vacio
        const name = document.getElementById('name').value.trim();
        if (name === '') {
            document.getElementById('nameError').innerText = 'El nombre es obligatorio.';
            isValid = false;
        }

        // Validando email
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            document.getElementById('emailError').innerText = 'El correo electrónico es obligatorio.';
            isValid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById('emailError').innerText = 'El correo electrónico no es válido.';
            isValid = false;
        }

        // Validando mensaje
        const message = document.getElementById('message').value.trim();
        if (message === '') {
            document.getElementById('messageError').innerText = 'El mensaje es obligatorio.';
            isValid = false;
        }

        mensajes = document.getElementById('mensajes');
        // Borramos todos los hijos del campo donde mostramos si el mensaje se envio
        mensajes.innerHTML = '';

        if (isValid) {
            event.preventDefault();
            var mensaje = document.createElement('div');
            mensaje.innerHTML = `Mensaje Enviado<br>    Nombre: ${name}<br> Email: ${email}<br> Mensaje: ${message}`;
            mensajes.appendChild(mensaje);
        }
    });
})();