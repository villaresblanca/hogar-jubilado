




//Script para manejar video e imagen con temporizador
//Script Index de abrir y cerrar videos e imagenes
    // Obtener los elementos
    const playVideoButton = document.getElementById('playVideoButton');
    const videoContainer = document.getElementById('videoContainer');
    const video = document.getElementById('video');
    const imageButtonContainer = document.getElementById('imageButtonContainer');
    const showImageButton = document.getElementById('showImageButton');
    const imageContainer = document.getElementById('imageContainer');
    const image = document.getElementById('image');
    const closeImageButton = document.getElementById('closeImageButton');
    const content = document.querySelector('.content');

    // Al hacer clic en el botón para reproducir el video
    playVideoButton.addEventListener('click', () => {
        content.classList.add('hidden');  // Ocultar el título y el párrafo
        videoContainer.classList.remove('hidden');  // Mostrar el video en pantalla completa
        video.play();  // Reproducir el video
    });
    
    // Detectar cuando el video termina
    video.addEventListener('ended', () => {
        videoContainer.classList.add('hidden');  // Ocultar el video cuando termina
        imageButtonContainer.classList.remove('hidden');  // Mostrar el botón para ver la imagen
    });
    
    // Mostrar imagen con temporizador al pulsar "Mostrar Imagen"
    showImageButton.addEventListener('click', () => {
        imageContainer.classList.remove('hidden');  // Mostrar la imagen
        imageButtonContainer.classList.add('hidden');  // Ocultar el botón de mostrar imagen

        /*
        // Configurar temporizador de 5 segundos para ocultar imagen
        setTimeout(() => {
            image.classList.add('hidden');
            closeImageButton.classList.remove('hidden'); //Muestra el boton de "volver a inicio"
            }, 5000); //Temporizdor de 5 segundos
            */
    });
    
    // Al hacer clic en el botón para reproducir el video
    playVideoButton.addEventListener('click', () => {
        content.classList.add('hidden');  // Ocultar el título y el párrafo
        videoContainer.classList.remove('hidden');  // Mostrar el video en pantalla completa
        video.play();  // Reproducir el video
    });
    
    // Al hacer clic en el botón para cerrar la imagen
    closeImageButton.addEventListener('click', () => {
        imageContainer.classList.add('hidden');  // Ocultar la imagen
        content.classList.remove('hidden');  // Mostrar de nuevo el contenido inicial (título y párrafo)
        playVideoButton.classList.remove('hidden');  // Volver a mostrar el botón de abrir video
    });

    // Volver al inicio al pulsar "Volver a Inicio"
    closeImageButton.addEventListener('click', () => {
    imageContainer.classList.add('hidden'); 
    content.classList.remove('hidden');
    playVideoButton.classList.remove('hidden');
    image.classList.remove('hidden'); // Restaurar imagen para futuros clics
    closeImageButton.classList.add('hidden'); // Ocultar botón de cierre
    });