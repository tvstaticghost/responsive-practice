function arrowMove() {
    const arrow = document.getElementById('right-arrow');
    const announcement = document.getElementById('announcement');

    announcement.addEventListener('mouseover', () => {
        arrow.style.transitionDuration = '0.8s';
        arrow.style.translate = '10px 0';
    });

    announcement.addEventListener('mouseleave', () => {
        arrow.style.transitionDuration = '0.8s';
        arrow.style.translate = '0 0';
    });
}

arrowMove();