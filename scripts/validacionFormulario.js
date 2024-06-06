document.getElementById('formularioReseñas').addEventListener('submit', function(event){
    event.preventDefault();

    var pelicula = document.getElementById('pelicula');
    var puntuacion = document.getElementById('puntuacion');
    var comentario = document.getElementById('comentario');

    if (!pelicula.value || pelicula.value.length > 30){
        pelicula.style.borderColor = "red";
        return false;
    }else{
        pelicula.style.borderColor = "black";
    }
    if (!puntuacion.value){
        puntuacion.style.borderColor = "red";
        return false;
    }else{
        puntuacion.style.borderColor = "black";
    }
    if (comentario.value && (comentario.value.length<10 || comentario.value.length>200)){
        comentario.style.borderColor = "red";
        return false;
    }else{
        comentario.style.borderColor = "black";
    }

    var reseña = document.createElement('div');
    reseña.innerHTML = `    Pelicula: ${pelicula.value}<br> Puntuacion: ${puntuacion.value}<br> Comentario: ${comentario.value}`;
    
    reseñas = document.getElementById('reseñas');
    reseñas.appendChild(reseña);

    pelicula.value = '';
    puntuacion.selectedIndex = 0;
    comentario.value = '';
});