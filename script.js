//---------Tema Oscuro / Claro

//Obtengo el botón y el cuerpo de la página
const botonCambiarTema = document.getElementById('cambiarTema');
const body = document.body;

//Verifico si tengo un tema guardado en memoria
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    botonCambiarTema.textContent = 'Modo oscuro';
}

//Funcionalidad para cambiar de modo
botonCambiarTema.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Cambiar el texto del botón según el modo
    if (body.classList.contains('light-mode')) {
        botonCambiarTema.textContent = 'Modo oscuro';
        localStorage.setItem('theme', 'light');  // Guardar preferencia en localStorage
    } else {
        botonCambiarTema.textContent = 'Modo claro';
        localStorage.removeItem('theme');  // Eliminar la preferencia
    }
});

//------------- Boton Ir Arriba

//Obtengo el boton
const botonIrArriba = document.getElementById('irArriba');

//Agrego el evento al clickear el botón
botonIrArriba.addEventListener('click', () => {
    window.scrollTo({
        top: 0,            // Desplazarse hasta la parte superior de la página
        left: 0,           // No desplazarse horizontalmente
        behavior: 'smooth' // Hacer el desplazamiento suave
    });
});

//---- Agrego efecto de que el boton solo sea visible cuando se desplazo un minimo hacia abajo
// Obtener el botón
botonIrArriba = document.getElementById('irArriba');

// Función para mostrar/ocultar el botón dependiendo del scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Si el desplazamiento es mayor a 300px
        botonIrArriba.style.display = 'block';  // Mostrar el botón
    } else {
        botonIrArriba.style.display = 'none';   // Ocultar el botón
    }
});