 function validarFormulario(event) {
            event.preventDefault();
            let valid = true;
            let empresa = document.getElementById("empresa");
            let nombre = document.getElementById("nombre");
            let email = document.getElementById("email");
            let cif = document.getElementById("cif");
            let telefono = document.getElementById("telefono");
            let mensaje = document.getElementById("mensaje");

            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let cifPattern = /^[A-Z0-9]{9}$/;
            let telefonoPattern = /^[0-9]{9}$/;

            document.querySelectorAll(".error").forEach(e => e.remove());

            if (!empresa.value.trim()) {
                mostrarError(empresa, "El nombre de la empresa es obligatorio.");
                valid = false;
            }
            if (!nombre.value.trim()) {
                mostrarError(nombre, "El nombre es obligatorio.");
                valid = false;
            }
            if (!emailPattern.test(email.value)) {
                mostrarError(email, "Introduce un email válido.");
                valid = false;
            }
            if (!cifPattern.test(cif.value)) {
                mostrarError(cif, "Introduce un CIF válido (9 caracteres, letras y números).");
                valid = false;
            }
            if (!telefonoPattern.test(telefono.value)) {
                mostrarError(telefono, "Introduce un número de 9 dígitos.");
                valid = false;
            }
            if (!mensaje.value.trim()) {
                mostrarError(mensaje, "El mensaje no puede estar vacío.");
                valid = false;
            }

            if (valid) {
                alert("Formulario enviado correctamente.");
                event.target.submit();
            }
        }

        function mostrarError(elemento, mensaje) {
            let error = document.createElement("div");
            error.className = "error";
            error.textContent = mensaje;
            elemento.parentNode.appendChild(error);
        }