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
//Filtro de búsqueda en mapa
// Arreglos de ubicaciones
const ubicacionesElectronicos = [
    {
        latitud: 14.594775,
        longitud: -90.483132,
        titulo: 'Ubicacion Electrónicos 1'
    },
    {
        latitud: 14.588308,
        longitud: -90.553279,
        titulo: 'Ubicacion Electrónicos 2'
    }
    // Agrega más ubicaciones de electrónicos según necesites
];

const ubicacionesPapel = [
    {
        latitud: 14.591234,
        longitud: -90.482345,
        titulo: 'Ubicacion Papel 1'
    },
    {
        latitud: 14.587654,
        longitud: -90.550987,
        titulo: 'Ubicacion Papel 2'
    }
    // Agrega más ubicaciones de papel según necesites
];

const ubicacionesPlastico = [
    {
        latitud: 14.593210,
        longitud: -90.480987,
        titulo: 'Ubicacion Plástico 1'
    },
    {
        latitud: 14.586789,
        longitud: -90.551234,
        titulo: 'Ubicacion Plástico 2'
    }
    // Agrega más ubicaciones de plástico según necesites
];

// Evento de clic en el botón de búsqueda
document.getElementById('buscarFiltro').addEventListener('click', function(event) {
    event.preventDefault(); // Evita la acción por defecto del botón (enviar formulario)

    // Obtener las opciones seleccionadas por el usuario
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const opcionesSeleccionadas = Array.from(checkboxes).map(checkbox => checkbox.id);

    // Limpiar el mapa antes de agregar nuevos marcadores
    limpiarMapa();

    // Lógica para mostrar ubicaciones en el mapa
    opcionesSeleccionadas.forEach(opcion => {
        switch(opcion) {
            case 'ubicacionElectronica':
                agregarUbicaciones(ubicacionesElectronicos);
                break;
            case 'ubicacionPapel':
                agregarUbicaciones(ubicacionesPapel);
                break;
            case 'ubicacionPlastico':
                agregarUbicaciones(ubicacionesPlastico);
                break;
            default:
                break;
        }
    });
});

// Función para agregar ubicaciones al mapa
function agregarUbicaciones(ubicaciones) {
    const mapa = document.getElementById('mapaGoogle');
    const urlMapa = mapa.src;
    ubicaciones.forEach(ubicacion => {
        const nuevoURL = `${urlMapa}&markers=color:red%7Clabel:${ubicacion.titulo}%7C${ubicacion.latitud},${ubicacion.longitud}`;
        mapa.src = nuevoURL;
    });
}

// Función para limpiar el mapa (quitar todos los marcadores)
function limpiarMapa() {
    const mapa = document.getElementById('mapaGoogle');
    const urlBase = mapa.src.split('&markers=')[0];
    mapa.src = urlBase;
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