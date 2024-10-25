// Elementos
const playVideoButton = document.getElementById('playVideoButton');
const videoContainer = document.getElementById('videoContainer');
const video = document.getElementById('video');
const imageButtonContainer = document.getElementById('imageButtonContainer');
const showImageButton = document.getElementById('showImageButton');
const imageContainer = document.getElementById('imageContainer');
const image = document.getElementById('image');
const closeImageButton = document.getElementById('closeImageButton');
const content = document.querySelector('.content');
const body = document.body; // Para agregar y quitar la clase de fondo

// Mostrar video al pulsar el botón de "Abrir Video"
playVideoButton.addEventListener('click', () => {
    content.classList.add('hidden');
    videoContainer.classList.remove('hidden');
    video.play();
    body.classList.add('background-hidden'); // Ocultar el video de fondo
});

// Detectar cuando termina el video y mostrar el botón de imagen
video.addEventListener('ended', () => {
    videoContainer.classList.add('hidden');
    imageButtonContainer.classList.remove('hidden');
    body.classList.remove('background-hidden'); // Mostrar el video de fondo
});

// Mostrar imagen al pulsar "Mostrar Imagen"
showImageButton.addEventListener('click', () => {
    imageContainer.classList.remove('hidden');
    imageButtonContainer.classList.add('hidden');
});

// Volver al inicio al pulsar "Volver a Inicio"
closeImageButton.addEventListener('click', () => {
    imageContainer.classList.add('hidden'); 
    content.classList.remove('hidden');
    playVideoButton.classList.remove('hidden');
});
