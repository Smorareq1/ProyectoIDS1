// Autor: Sebsatian Morales y Christopher Yuman

// Función para mostrar el contenido completo de un artículo
function mostrarContenido(idArituclo){
    var articulo = document.getElementById(idArituclo);
    var contenidoCompleto = "Contenido completo del artículo... " +
        "¡Aquí puedes agregar todo el texto que desees!";

    // Reemplazar el contenido del párrafo con el contenido completo
    articulo.querySelector('p').textContent = contenidoCompleto;
    // Ocultar el enlace "Leer más"
    articulo.querySelector('a').style.display = 'none';
}

//