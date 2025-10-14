
let currentSlide = 0;
let totalSlides = 0;
let autoplayInterval;
let visibleCount = 4;

function moveCarousel(direction) {
    visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, totalSlides - visibleCount);
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = maxIndex;
    } else if (currentSlide > maxIndex) {
        currentSlide = 0;
    }

    // updateCarousel();
    // resetAutoplay();
}

function goToSlide(index) {
    visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, totalSlides - visibleCount);
    currentSlide = Math.max(0, Math.min(index, maxIndex));
    updateCarousel();
    resetAutoplay();
}

function getVisibleCount() {
    const width = window.innerWidth || document.documentElement.clientWidth;
    if (width < 768) return 1;
    if (width < 1200) return 2;
    return 4;
}

function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    const dots = document.querySelectorAll('.dot');
    if (!track) return;
    visibleCount = getVisibleCount();
    const stepPercent = 100 / visibleCount; // width per testimonial
    track.style.transform = `translateX(-${currentSlide * stepPercent}%)`;
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function startAutoplay() {
    autoplayInterval = setInterval(() => {
        moveCarousel(1);
    }, 5000);
}

function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
}

function openModal() {
    document.getElementById('hireModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('hireModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    event.target.reset();
}

function handleModalSubmit(event) {
    event.preventDefault();
    alert('Thank you for your inquiry! I will review your request and contact you shortly.');
    closeModal();
    event.target.reset();
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        moveCarousel(-1);
    } else if (e.key === 'ArrowRight') {
        moveCarousel(1);
    } else if (e.key === 'Escape') {
        closeModal();
    }
});

window.addEventListener('click', (e) => {
    const modal = document.getElementById('hireModal');
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const dotsContainer = document.querySelector('.carousel-dots');
    if (!track || !dotsContainer || !window.testimonialsData) {
        startAutoplay();
        return;
    }

    // build single-item slides
    const slidesHTML = window.testimonialsData.map(t => `
                <div class="testimonial-slide">
                    <article class="testimonial">
                        <div class="stars">${'★'.repeat(t.rating)}</div>
                        <h4>${t.title}</h4>
                        <p>${t.text}</p>
                        <div class="author">
                            <img src="${t.authorImage}" alt="${t.authorName}" class="author-image">
                            <div class="author-info">
                                <h5>${t.authorName}</h5>
                                <p>${t.authorRole}</p>
                            </div>
                        </div>
                    </article>
                </div>
            `).join('');
    track.innerHTML = slidesHTML;

    // build dots
    totalSlides = window.testimonialsData.length;
    const dotsHTML = Array.from({ length: totalSlides }, (_, i) => `
                <span class="dot${i === 0 ? ' active' : ''}" onclick="goToSlide(${i})"></span>
            `).join('');
    dotsContainer.innerHTML = dotsHTML;

    // initialize
    currentSlide = 0;
    updateCarousel();
    startAutoplay();
});

// keep layout responsive on resize
window.addEventListener('resize', () => {
    updateCarousel();
});

let touchStartX = 0;
let touchEndX = 0;

const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

carouselContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        moveCarousel(1);
    }
    if (touchEndX > touchStartX + 50) {
        moveCarousel(-1);
    }
}

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});


