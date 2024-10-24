// Modal imagen Hogar Jubilado
    //obtener los elemntos
    var modal = document.getElementById("modal-jubilado");
    var img = document.getElementById("img-jubilado");
    var modalImg = document.getElementById("img-modal-jubilado");
    var span = document.getElementsByClassName("close")[0];

    //Al hacer click en la imagen, se muestra el modal
    img.onclick = function () { 
        var rect = img.getBoundingClientRect(); //Obtener posición de la imagen
        modalImg.src = this.src; //Cargar la imagen cliclada en el modal

        //Muestra el modal
        modal.style.display = "block";

        //Ajusta elpunto de origen del zoom según la posición de la imagen
        modalImg.style.transformOrigin = `${rect.left + window.scrollX}px ${rect.top + window.scrollY}px`;

        //Añadir clase despues de un pequeño retraso para iniciar la animación
        setTimeout(function() {
            modal.classList.add("show");
        }, 10); //Pequeño retraso de 10ms para permitir que se renderice el modal antes de la animación
    }

    // Al hacer click en la "X" se cierra el modal
    span.onclick = function () {
        modal.classList.remove("show"); //Quita la clase de la animación

        //Espera que termine la animación antes de ocultar el modal
        setTimeout(function() {
            modal.style.display = "none"; 
        }, 400);
    }

    // Para que se cierre la imagen haciendo clik fuera de esta y no en la "X"
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.classList.remove("show"); //Quita la clase de animación
            setTimeout(function() {
                modal.style.display = "none";
            }, 400); //Espera a que termine la animación antes de ocultar el modal
        }
    }
