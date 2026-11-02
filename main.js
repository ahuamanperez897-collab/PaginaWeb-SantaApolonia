document.addEventListener("DOMContentLoaded", function() {
    
    // 1. MENÚ HAMBURGUESA
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("active");
        });
    }

    // 2. VALIDACIÓN DEL FORMULARIO
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); 

            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();

            if (nombre === "" || correo === "") {
                alert("⚠️ Por favor, complete todos los campos obligatorios.");
                return;
            }

            alert(`✅ ¡Gracias ${nombre}! Hemos recibido tu mensaje. Nos contactaremos a: ${correo}`);
            contactForm.reset();
        });
    }
});