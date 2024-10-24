// Obtener los elementos de la imagen y el video
const toggleImgBtn = document.getElementById('toggleImg-Jubilado');
const imgContainer = document.getElementById('Jubilado-ImgContainer');

const toggleVidBtn = document.getElementById('toggleVid-Jubilado');
const vidContainer = document.getElementById('Jubilado-VidContainer');

// Función para mostrar/ocultar la imagen
toggleImgBtn.addEventListener('click', () => {
    if (imgContainer.classList.contains('hidden')) {
        imgContainer.classList.remove('hidden');
        toggleImgBtn.textContent = 'Ocultar Imagen';
    } else {
        imgContainer.classList.add('hidden');
        toggleImgBtn.textContent = 'Mostrar Imagen';
    }
});

// Función para mostrar/ocultar el vídeo
toggleVidBtn.addEventListener('click', () => {
    if (vidContainer.classList.contains('hidden')) {
        vidContainer.classList.remove('hidden');
        toggleVidBtn.textContent = 'Ocultar Vídeo';
    } else {
        vidContainer.classList.add('hidden');
        toggleVidBtn.textContent = 'Mostrar Vídeo';
    }
});
