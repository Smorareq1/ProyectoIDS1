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
            // Agrega más casos según tus necesidades
            default:
                alert('Artículo no encontrado'); // Mostrar mensaje si el artículo no está definido
        }
    } else {
        alert('Ingresa un término de búsqueda'); // Mostrar mensaje si no se ingresa ningún término
    }
});

//Otras funciones

