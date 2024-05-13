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
const mapasPersonalizados = {
    electronicos: {
        url: "https://www.google.com/maps/d/u/0/embed?mid=16vdwoq3Os_TbpwkegZ7SLNoSFXCUMGg&ehbc=2E312F&noprof=1",
        width: 600,
        height: 450
    },
    papel: {
        url: "https://www.google.com/maps/d/u/0/embed?mid=1zreIZLdoUIIrq5eFwR5jgrltINza0jE&ehbc=2E312F&noprof=1",
        width: 600,
        height: 450
    },
    plastico: {
        url: "https://www.google.com/maps/d/u/0/embed?mid=1jRjjW6VEqU-S1t8NpS6uu9H2eD3NBE0&ehbc=2E312F&noprof=1",
        width: 600,
        height: 450
    }
};

const mapa = document.getElementById('mapaGoogle');
const opcionesCheckbox = document.querySelectorAll('input[type="checkbox"]');
const buscarBtn = document.getElementById('buscarFiltro');

buscarBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const opcionSeleccionada = document.querySelector('input[type="checkbox"]:checked');

    if (opcionSeleccionada) {
        limpiarMapa();
        mostrarUbicacion(opcionSeleccionada.value);
    } else {
        alert('Selecciona una opción para ver la ubicación en el mapa');
    }
});

opcionesCheckbox.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            opcionesCheckbox.forEach(otherCheckbox => {
                if (otherCheckbox !== this) {
                    otherCheckbox.checked = false;
                }
            });
        }
    });
});

function limpiarMapa() {
    mapa.src = '';
}

function mostrarUbicacion(opcion) {
    const ubicacion = mapasPersonalizados[opcion];
    if (ubicacion) {
        mapa.src = ubicacion.url;
        mapa.width = ubicacion.width;
        mapa.height = ubicacion.height;
    } else {
        alert('Ubicación no encontrada');
    }
}



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