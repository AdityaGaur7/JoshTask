const projectsData = [
  {
    "title": "How To Make Flyer Design",
    "description": "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Lorem Sit Lorem Ipsum...",
    "tags": ["Typescript", "React.js", "Next.js", "CSS", "HTML", "MongoDB"],
    "imageAlt": "Project 1",
    "imageSrc": "public/images/project1.png"
  },
  {
    "title": "How To Make Flyer Design",
    "description": "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Lorem Sit Lorem Ipsum...",
    "tags": ["Typescript", "React.js", "Next.js", "CSS"],
    "imageAlt": "Project 2",
    "imageSrc": "public/images/project2.png"
  },
  {
    "title": "How To Make Flyer Design",
    "description": "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Lorem Sit Lorem Ipsum...",
    "tags": ["Typescript", "React.js", "Next.js", "CSS"],
    "imageAlt": "Project 3",
    "imageSrc": "public/images/project3.png"
  },
  {
    "title": "How To Make Flyer Design",
    "description": "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Lorem Sit Lorem Ipsum...",
    "tags": ["Typescript", "React.js", "Next.js", "CSS", "HTML", "MongoDB"],
    "imageAlt": "Project 4",
    "imageSrc": "public/images/project4.png"
  },
  {
    "title": "How To Make Flyer Design",
    "description": "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Lorem Sit Lorem Ipsum...",
    "tags": ["Typescript", "React.js", "Next.js", "CSS", "HTML", "MongoDB"],
    "imageAlt": "Project 5",
    "imageSrc": "public/images/project1.png"
  },
  {
    "title": "How To Make Flyer Design",
    "description": "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Lorem Sit Lorem Ipsum...",
    "tags": ["Typescript", "React.js", "Next.js", "CSS", "HTML", "MongoDB"],
    "imageAlt": "Project 6",
    "imageSrc": "public/images/project6.png"
  }
];

// Get the container element where projects will be rendered
const projectsGrid = document.querySelector('.projects-grid');

// Use map() to create an array of HTML strings, one for each project
const projectsHTML = projectsData.map(project => {
    // Generate the HTML for the tags
    const tagsHTML = project.tags.map(tag => 
        `<span class="tag">${tag}</span>`
    ).join(''); // Join the tag HTML strings together

    // Generate the full HTML for the project card
    return `
        <article class="project-card">
            <img src="${project.imageSrc}"
                alt="${project.imageAlt}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${tagsHTML}
                </div>
            </div>
        </article>
    `;
}).join(''); // Join all project card HTML strings together

// Insert the generated HTML into the DOM
if (projectsGrid) {
    projectsGrid.innerHTML = projectsHTML;
}

const testimonialsData = [
  // ... (Paste the full JSON array from section 1 here) ...
  {
    "rating": "★★★★★",
    "headline": "Great Quality!",
    "review": "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    "authorName": "James Gouse",
    "authorTitle": "Graphic Designer",
    "imageSrc": "data:image/svg+xml,%3Csvg width='50' height='50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='25' fill='%23ccc'/%3E%3C/svg%3E",
    "imageAlt": "James Gouse"
  },
  {
    "rating": "★★★★★",
    "headline": "Amazing Work!",
    "review": "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    "authorName": "Tiana Philips",
    "authorTitle": "Photographer",
    "imageSrc": "data:image/svg+xml,%3Csvg width='50' height='50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='25' fill='%23bbb'/%3E%3C/svg%3E",
    "imageAlt": "Tiana Philips"
  },
  {
    "rating": "★★★★★",
    "headline": "Great Quality!",
    "review": "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    "authorName": "Talan Westervelt",
    "authorTitle": "Business Man",
    "imageSrc": "data:image/svg+xml,%3Csvg width='50' height='50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='25' fill='%23aaa'/%3E%3C/svg%3E",
    "imageAlt": "Talan Westervelt"
  },
  {
    "rating": "★★★★★",
    "headline": "Great Quality!",
    "review": "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    "authorName": "John Smith",
    "authorTitle": "Developer",
    "imageSrc": "data:image/svg+xml,%3Csvg width='50' height='50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='25' fill='%23999'/%3E%3C/svg%3E",
    "imageAlt": "Author 4"
  },
  {
    "rating": "★★★★★",
    "headline": "Excellent Service!",
    "review": "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    "authorName": "Sarah Johnson",
    "authorTitle": "Marketing Manager",
    "imageSrc": "data:image/svg+xml,%3Csvg width='50' height='50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='25' fill='%23888'/%3E%3C/svg%3E",
    "imageAlt": "Author 5"
  },
  {
    "rating": "★★★★★",
    "headline": "Outstanding Work!",
    "review": "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    "authorName": "Michael Brown",
    "authorTitle": "CEO",
    "imageSrc": "data:image/svg+xml,%3Csvg width='50' height='50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='25' fill='%23777'/%3E%3C/svg%3E",
    "imageAlt": "Author 6"
  },
  {
    "rating": "★★★★★",
    "headline": "Professional!",
    "review": "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    "authorName": "Emily Davis",
    "authorTitle": "Product Manager",
    "imageSrc": "data:image/svg+xml,%3Csvg width='50' height='50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='25' fill='%23666'/%3E%3C/svg%3E",
    "imageAlt": "Author 7"
  },
  {
    "rating": "★★★★★",
    "headline": "Highly Recommended!",
    "review": "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    "authorName": "David Wilson",
    "authorTitle": "Designer",
    "imageSrc": "data:image/svg+xml,%3Csvg width='50' height='50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='25' fill='%23555'/%3E%3C/svg%3E",
    "imageAlt": "Author 8"
  }
];

const CARDS_PER_SLIDE = 3; // The original HTML had 3 cards per 'recommendation-card' div

const track = document.getElementById('carousel-track');
const dotsContainer = document.getElementById('carousel-dots');
let currentSlide = 0;
let totalSlides;

/**
 * Groups the testimonials into slides and generates the HTML using map().
 */
function renderCarousel() {
    if (!track || !dotsContainer) return; // Exit if containers aren't found

    // 1. Calculate the number of slides
    totalSlides = Math.ceil(testimonialsData.length / CARDS_PER_SLIDE);

    // 2. Generate the HTML for the Slides (Testimonials)
    let carouselHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        // Use slice to get the subset of data for the current slide
        const slideData = testimonialsData.slice(i * CARDS_PER_SLIDE, (i + 1) * CARDS_PER_SLIDE);

        // Map over the slide data to generate the individual testimonial card HTML
        const cardHTML = slideData.map(item => `
            <article class="testimonial">
                <div class="stars">${item.rating}</div>
                <h4>${item.headline}</h4>
                <p>${item.review}</p>
                <div class="author">
                    <img src="${item.imageSrc}" alt="${item.imageAlt}" class="author-image">
                    <div class="author-info">
                        <h5>${item.authorName}</h5>
                        <p>${item.authorTitle}</p>
                    </div>
                </div>
            </article>
        `).join('');

        // Wrap the cards in the slide container
        carouselHTML += `<div class="recommendation-card">${cardHTML}</div>`;
    }

    track.innerHTML = carouselHTML;

    // 3. Generate the HTML for the Dots
    const dotsHTML = Array.from({ length: totalSlides }).map((_, index) => `
        <span class="dot ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></span>
    `).join('');

    dotsContainer.innerHTML = dotsHTML;

    // Initialize the carousel position
    updateCarousel();
}

/**
 * Handles moving the carousel to a new position.
 * @param {number} direction - 1 for next, -1 for previous.
 */
function moveCarousel(direction) {
    let newSlide = currentSlide + direction;

    if (newSlide < 0) {
        newSlide = totalSlides - 1; // Loop to last slide
    } else if (newSlide >= totalSlides) {
        newSlide = 0; // Loop to first slide
    }

    goToSlide(newSlide);
}

/**
 * Jumps directly to a specific slide index.
 * @param {number} index - The index of the slide to show.
 */
function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

/**
 * Updates the visual state of the carousel (position and dots).
 */
function updateCarousel() {
    const offset = -currentSlide * 100;
    track.style.transform = `translateX(${offset}%)`;

    // Update dots
    const dots = document.querySelectorAll('.carousel-dots .dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Start the rendering process when the script loads
renderCarousel();