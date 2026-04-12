const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav (Ouvrir/Fermer le menu)
        nav.classList.toggle('nav-active');

        // Burger Animation (Transformer en croix)
        burger.classList.toggle('toggle');

        // Animation des liens (Optionnel : les faire apparaître un par un)
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
}

navSlide();