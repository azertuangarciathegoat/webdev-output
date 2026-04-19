document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('#gadgets-list input[name="carousel"]');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    function updateSlide(direction) {
        const current = Array.from(radios).find(r => r.checked);
        if (!current) return;

        let currentIndex = Array.from(radios).indexOf(current);
        let newIndex = currentIndex;

        if (direction === 'next') {
            newIndex = (currentIndex + 1) % radios.length;
        } else if (direction === 'prev') {
            newIndex = (currentIndex - 1 + radios.length) % radios.length;
        }

        radios[newIndex].checked = true;
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            updateSlide('prev');
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            updateSlide('next');
        });
    }
});
