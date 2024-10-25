





//Script Index de abrir y cerrar videos e imagenes
    // Obtener los elementos
    const playVideoButton = document.getElementById('playVideoButton');
    const videoContainer = document.getElementById('videoContainer');
    const video = document.getElementById('video');
    const imageButtonContainer = document.getElementById('imageButtonContainer');
    const showImageButton = document.getElementById('showImageButton');
    const imageContainer = document.getElementById('imageContainer');
    const content = document.querySelector('.content');
    
    const closeImageButton = document.getElementById('closeImageButton');
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
    
    // Al hacer clic en el botón para mostrar la imagen
    showImageButton.addEventListener('click', () => {
        imageContainer.classList.remove('hidden');  // Mostrar la imagen
        imageButtonContainer.classList.add('hidden');  // Ocultar el botón de mostrar imagen
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
