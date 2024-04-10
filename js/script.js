// Obtener el formulario y el campo de entrada
const form = document.getElementById('headerSearchForm');
const searchInput = document.getElementById('searchInput');

// Manejar el evento de envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener el término de búsqueda ingresado por el usuario
    const searchTerm = searchInput.value.trim();

    // Realizar la redirección basada en el término de búsqueda
    if (searchTerm) {
        // Redireccionar a la página correspondiente al término de búsqueda
        switch (searchTerm) {
            case 'Importancia del reciclaje':
                window.location.href = 'post.html'; // Redireccionar al artículo sobre sostenibilidad
                searchInput.value = '';
                break;
            case 'Una energia mas saludable':
                window.location.href = 'post2.html'; // Redireccionar al artículo sobre reciclaje
                searchInput.value = '';
                break;
            case 'El calentamiento global y su impacto crucial en el medio ambiente':
                window.location.href = 'post3.html'; // Redireccionar al artículo sobre reciclaje
                searchInput.value = '';
                break;
            case 'Ganar dinero reciclando':
                window.location.href = 'post4.html'; // Redireccionar al artículo sobre reciclaje
                searchInput.value = '';
                break;
            case 'Animales y reciclaje en beneficio del medio ambiente':
                window.location.href = 'post5.html'; // Redireccionar al artículo sobre reciclaje
                searchInput.value = '';
                break;
            case 'Cultivando un futuro sostenible':
                window.location.href = 'post6.html'; // Redireccionar al artículo sobre reciclaje
                searchInput.value = '';
                break;
            // Agrega más casos según tus necesidades
            default:
                alert('Artículo no encontrado'); // Mostrar mensaje si el artículo no está definido
        }
    } else {
        alert('Ingresa un término de búsqueda'); // Mostrar mensaje si no se ingresa ningún término
    }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////
// Mapas personalizados para cada opción
const mapasPersonalizados = {
    electronicos: {
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.917643673955!2d-90.49182828898171!3d14.60376717693958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a3a991475f6f%3A0x3ded42e1475475f0!2sUniversidad%20del%20Valle%20de%20Guatemala!5e0!3m2!1ses!2sgt!4v1712725528732!5m2!1ses!2sgt",
        width: 600,
        height: 450
    },
    papel: {
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.5871510860193!2d-90.55444148898145!3d14.622578876478581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a110e16ca3d3%3A0xc69355632110809e!2sMiraflores!5e0!3m2!1ses!2sgt!4v1712726770719!5m2!1ses!2sgt",
        width: 600,
        height: 450
    },
    plastico: {
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61769.370622871!2d-90.59315749364247!3d14.62266347220422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a3fe821366b7%3A0xfd632a3b58deb640!2sCiudad%20Cayal%C3%A1!5e0!3m2!1ses!2sgt!4v1712726829641!5m2!1ses!2sgt",
        width: 600,
        height: 450
    }
    // Agrega más opciones según sea necesario
};

/// Almacenar referencias a elementos DOM
const mapa = document.getElementById('mapaGoogle');
const opcionesCheckbox = document.querySelectorAll('input[type="checkbox"]');

// Evento de clic en el botón de búsqueda
document.getElementById('buscarFiltro').addEventListener('click', function(event) {
    event.preventDefault(); // Evita la acción por defecto del botón (enviar formulario)

    // Obtener la opción seleccionada por el usuario
    const opcionSeleccionada = document.querySelector('input[type="checkbox"]:checked');

    // Limpiar el mapa antes de agregar nuevos marcadores
    limpiarMapa();

    // Lógica para mostrar ubicaciones en el mapa
    if (opcionSeleccionada) {
        agregarUbicaciones(opcionSeleccionada.value);
    } else {
        alert('Selecciona una opción para ver la ubicación en el mapa');
    }
});

// Función para agregar ubicaciones al mapa
function agregarUbicaciones(opcion) {
    const ubicacion = mapasPersonalizados[opcion];
    if (ubicacion) {
        mapa.src = ubicacion.url;
        mapa.width = ubicacion.width;
        mapa.height = ubicacion.height;
    } else {
        alert('Ubicación no encontrada');
    }
}

// Función para limpiar el mapa (quitar todos los marcadores)
function limpiarMapa() {
    mapa.src = ''; // Vacía la URL del mapa
}

// Evento de cambio en las opciones checkbox
opcionesCheckbox.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            // Limpiar las demás opciones
            opcionesCheckbox.forEach(otherCheckbox => {
                if (otherCheckbox !== this) {
                    otherCheckbox.checked = false;
                }
            });
        }
    });
});




///////////////////////////////////////////////////////////////////////////////////////////////////////
//Aviso de envio de formulario
document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a los elementos del formulario
    const form = document.getElementById('sugerenciasForm');
    const btnEnviar = document.getElementById('btnSugerencias');
    const nombreInput = document.getElementById('NombreSugerencias');
    const correoInput = document.getElementById('CorreoSugerencias');
    const descripcionInput = document.getElementById('DescripcionSugerencias');

    // Agregar evento clic al botón Enviar
    btnEnviar.addEventListener('click', function (event) {
        // Prevenir el comportamiento por defecto del botón (enviar formulario)
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        const nombre = nombreInput.value;
        const correo = correoInput.value;
        const descripcion = descripcionInput.value;

        // Ejemplo de acción: mostrar los valores en forma de alerta
        alert(`Siguientes datos enviados para revisión:\nNombre: ${nombre}\nCorreo: ${correo}\nDescripción: ${descripcion}`);
        NombreSugerencias.value = '';
        CorreoSugerencias.value = '';
        DescripcionSugerencias.value = '';

        // Aquí puedes realizar las acciones que desees con la información capturada
        // Por ejemplo, puedes enviarla a un servidor mediante una solicitud HTTP (Ajax o Fetch).
    });
});