document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Order buttons functionality
    const orderBtns = document.querySelectorAll('.order-btn');
    orderBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productName = btn.parentElement.querySelector('h3').innerText;
            const message = encodeURIComponent(`Hola Vueltica al Mundo! Me gustaría pedir la ancheta de ${productName}.`);
            // Here you could link to WhatsApp
            window.open(`https://wa.me/573000000000?text=${message}`, '_blank');
        });
    });
});
