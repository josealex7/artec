document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slider li");
    const indicators = document.querySelectorAll(".indicator");
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Función para mostrar un slide
    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            indicators[i].classList.remove("active");
        });
        slides[index].classList.add("active");
        indicators[index].classList.add("active");
    };

    // Cambiar al siguiente slide automáticamente
    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % totalSlides; // Volver al inicio después del último slide
        showSlide(currentSlide);
    };

    // Rotación automática cada 4 segundos
    let slideInterval = setInterval(nextSlide, 4000);

    // Manejar clics en los indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            clearInterval(slideInterval); // Pausar el auto-rotador al hacer clic
            showSlide(index);
            currentSlide = index;
            slideInterval = setInterval(nextSlide, 4000); // Reiniciar la rotación
        });
    });

    // Mostrar el primer slide al cargar
    showSlide(currentSlide);

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser.estado) {
        // Si no está logueado, mostrar el mensaje
        document.getElementById('mensaje-login').style.display = 'block';
    }
});



