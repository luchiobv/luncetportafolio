document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    let maxHeight = 0;

    // Encuentra la altura máxima de las tarjetas
    cards.forEach(card => {
        const height = card.offsetHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    // Ajusta la altura de todas las tarjetas a la altura máxima
    cards.forEach(card => {
        card.style.height = `${maxHeight}px`;
    });
});
