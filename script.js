document.addEventListener('DOMContentLoaded', function() {
    const filmItems = document.querySelectorAll('.film-item');

    filmItems.forEach(item => {
        item.addEventListener('click', function() {
            const overlay = this.querySelector('.film-overlay');
            const video = overlay.querySelector('video');

            if (overlay.style.opacity === '1') {
                // Se o overlay está visível, esconda-o e pause o vídeo
                overlay.style.opacity = '0';
                video.pause();
            } else {
                // Caso contrário, mostre o overlay e reproduza o vídeo
                overlay.style.opacity = '1';
                video.play();
            }
        });
    });
});