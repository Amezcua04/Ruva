document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los elementos de navegación
    const navItems = document.querySelectorAll('.nav-link');
  
    // Agregar un controlador de eventos click a cada elemento de navegación
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        // Obtener el objetivo del panel del atributo data-bs-target del elemento de navegación
        const targetPanelId = item.getAttribute('data-bs-target');
        // Obtener el panel correspondiente al objetivo
        const targetPanel = document.querySelector(targetPanelId);
        
        // Obtener todos los paneles que están abiertos
        const openPanels = document.querySelectorAll('.collapse.show');
        // Cerrar cada panel abierto
        openPanels.forEach(panel => {
          if (panel !== targetPanel) {
            panel.classList.remove('show');
          }
        });
      });
    });

    // Obtener la barra de navegación
    const navbar = document.querySelector('.navbar');

    // Agregar un controlador de eventos scroll a la ventana
    window.addEventListener('scroll', () => {
      // Si la posición de desplazamiento vertical es mayor que 100px, agregar la clase 'scrolled'
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        // De lo contrario, eliminar la clase 'scrolled'
        navbar.classList.remove('scrolled');
      }
    });

    //
  });
  