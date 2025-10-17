// Testimonials data
const testimonialsData = [
  {
    rating: 5,
    title: "Great Quality!",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    authorName: "James Gouse",
    authorRole: "Graphic Designer",
    authorImage: "public/images/author1.png"
  },
  {
    rating: 5,
    title: "Amazing Work!",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    authorName: "Tiana Philips",
    authorRole: "Photographer",
    authorImage: "public/images/author2.png"
  },
  {
    rating: 5,
    title: "Great Quality!",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    authorName: "Talan Westervelt",
    authorRole: "Business Man",
    authorImage: "public/images/author3.png"
  },
  {
    rating: 5,
    title: "Great Quality!",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    authorName: "John Smith",
    authorRole: "Developer",
    authorImage: "public/images/author1.png"
  },
  {
    rating: 5,
    title: "Great Quality!",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    authorName: "James Gouse",
    authorRole: "Graphic Designer",
    authorImage: "public/images/author1.png"
  },
 
];

//---------------Projects data ---------------------
const projectsData = [
  {
    "title": "How To Make Flyer Design",
    "description": "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Lorem Sit Lorem Ipsum...",
    "tags": ["Typescript", "ReactJs", "NextJs", "CSS", "HTML", "MongoDB"],
    "imageAlt": "Project 1",
    "imageSrc": "public/images/project1.png"
  },
  {
    "title": "How To Make Flyer Design",
    "description": "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Lorem Sit Lorem Ipsum...",
    "tags": ["Typescript", "ReactJs", "NextJs", "CSS"],
    "imageAlt": "Project 2",
    "imageSrc": "public/images/project2.png"
  },
  {
    "title": "How To Make Flyer Design",
    "description": "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Lorem Sit Lorem Ipsum...",
    "tags": ["Typescript", "ReactJs", "NextJs", "CSS","HTML","MongoDB"],
    "imageAlt": "Project 3",
    "imageSrc": "public/images/project3.png"
  },
  {
    "title": "How To Make Flyer Design",
    "description": "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Lorem Sit Lorem Ipsum...",
    "tags": ["Typescript", "ReactJs", "NextJs", "CSS", "HTML", "MongoDB"],
    "imageAlt": "Project 4",
    "imageSrc": "public/images/project4.png"
  },
  {
    "title": "How To Make Flyer Design",
    "description": "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Lorem Sit Lorem Ipsum...",
    "tags": ["Typescript", "ReactJs", "NextJs", "CSS", "HTML", "MongoDB"],
    "imageAlt": "Project 5",
    "imageSrc": "public/images/project1.png"
  },
  {
    "title": "How To Make Flyer Design",
    "description": "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Lorem Sit Lorem Ipsum...",
    "tags": ["Typescript", "ReactJs", "NextJs", "CSS", "HTML", "MongoDB"],
    "imageAlt": "Project 6",
    "imageSrc": "public/images/project6.png"
  }
];



const projectsGrid = document.querySelector('.projects-grid');


const projectsHTML = projectsData.map(project => {
 
  const tagsHTML = project.tags.map(tag =>
    `<span class="tag">${tag}</span>`
  ).join(''); 

 
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



// expose for carousel builder
window.testimonialsData = testimonialsData;

