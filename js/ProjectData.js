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

