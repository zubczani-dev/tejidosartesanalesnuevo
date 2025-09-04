
    // Script acordeón
    document.addEventListener('DOMContentLoaded', function () {
      const buttons = document.querySelectorAll('.accordion-button');
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const content = btn.nextElementSibling;
          content.classList.toggle('open');
        });
      });

      // Script para botón comprar
      const botones = document.querySelectorAll('.btn-comprar');
      botones.forEach(boton => {
        boton.addEventListener('click', function () {
          const contenedor = boton.closest('.producto');
          const nombre = contenedor.querySelector('h3').textContent;
          const telefono = "5493755742887";
          const mensaje = `Hola! Estoy interesado en comprar:\n• Producto: ${nombre}`;
          const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
          window.location.href = url;
        });
      });
    });
