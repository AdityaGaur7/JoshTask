
        let currentSlide = 0;
        const totalSlides = 5;
        let autoplayInterval;

        function moveCarousel(direction) {
            currentSlide += direction;
            
            if (currentSlide < 0) {
                currentSlide = totalSlides - 1;
            } else if (currentSlide >= totalSlides) {
                currentSlide = 0;
            }
            
            updateCarousel();
            resetAutoplay();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateCarousel();
            resetAutoplay();
        }

        function updateCarousel() {
            const track = document.querySelector('.carousel-tracko');
            const dots = document.querySelectorAll('.dot');
            
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            
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
            startAutoplay();
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
    

        