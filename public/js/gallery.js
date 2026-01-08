// Sample project data
const projects = [
    {
        id: 1,
        title: "Vertical Blinds",
        category: "vertical",
        image: "./assets/Portfolio/1.jpeg"
    },
    {
        id: 2,
        title: "Vertical Blinds",
        category: "vertical",
        image: "./assets/Portfolio/2.jpeg"
    },
    {
        id: 3,
        title: "Vertical Blinds",
        category: "vertical",
        image: "./assets/Portfolio/3.jpeg"
    },
    {
        id: 4,
        title: "Vertical Blinds",
        category: "vertical",
        image: "./assets/Portfolio/4.jpeg"
    },
    {
        id: 5,
        title: "vertical Blinds",
        category: "vertical",
        image: "./assets/Portfolio/5.jpeg"
    },
    {
        id: 6,
        title: "Roller Blinds",
        category: "roller",
        image: "./assets/Portfolio/6.jpeg"
    },
    {
        id: 7,
        title: "Roller Blinds",
        category: "roller",
        image: "./assets/Portfolio/7.jpg"
    },
    {
        id: 8,
        title: "Roller Blinds",
        category: "roller",
        image: "./assets/Portfolio/8.jpg"
    },
    {
        id: 9,
        title: "Wooden venetian Blinds",
        category: "wooden",
        image: "./assets/Portfolio/33.jpg"
    },
    {
        id: 9,
        title: "Wooden venetian Blinds",
        category: "wooden",
        image: "./assets/Portfolio/34.jpg"
    },
    {
        id: 9,
        title: "Roller Blinds",
        category: "roller",
        image: "./assets/Portfolio/9.jpeg"
    },
    {
        id: 9,
        title: "Roller Blinds",
        category: "roller",
        image: "./assets/Portfolio/12.jpeg"
    },
    {
        id: 9,
        title: "Vertical Blinds",
        category: "vertical",
        image: "./assets/Portfolio/14.jpeg"
    },
    {
        id: 9,
        title: "Roller Blinds",
        category: "roller",
        image: "./assets/Portfolio/15.jpeg"
    },
    {
        id: 9,
        title: "Roller Blinds",
        category: "roller",
        image: "./assets/Portfolio/16.jpeg"
    },
    {
        id: 9,
        title: "Roller Blinds",
        category: "roller",
        image: "./assets/Portfolio/18.jpeg"
    },
    {
        id: 9,
        title: "Aluminium venetian Blinds",
        category: "alum",
        image: "./assets/Portfolio/17.jpeg"
    },
    {
        id: 9,
        title: "Aluminum Blinds",
        category: "alum",
        image: "./assets/Portfolio/19.jpeg"
    },
    {
        id: 9,
        title: "Roller Blinds",
        category: "roller",
        image: "./assets/Portfolio/20.jpeg"
    },
    {
        id: 9,
        title: "Roller Blinds",
        category: "roller",
        image: "./assets/Portfolio/21.jpeg"
    },
    {
        id: 9,
        title: "Roller Blinds",
        category: "roller",
        image: "./assets/Portfolio/22.jpeg"
    },
    {
        id: 9,
        title: "Roller Blinds",
        category: "roller",
        image: "./assets/Portfolio/23.jpeg"
    },
    {
        id: 9,
        title: "Vertical Blinds",
        category: "vertical",
        image: "./assets/Portfolio/24.jpg"
    },
    {
        id: 9,
        title: "Vertical Blinds",
        category: "vertical",
        image: "./assets/Portfolio/25.jpg"
    },
    {
        id: 9,
        title: "Vertical Blinds",
        category: "vertical",
        image: "./assets/Portfolio/26.jpg"
    },
    {
        id: 9,
        title: "Vertical Blinds",
        category: "vertical",
        image: "./assets/Portfolio/35.jpg"
    },
    {
        id: 9,
        title: "Roller Blinds",
        category: "roller",
        image: "./assets/Portfolio/27.jpeg"
    },
    {
        id: 9,
        title: "Roller Blinds",
        category: "roller",
        image: "./assets/Portfolio/28.jpeg"
    },
    {
        id: 9,
        title: "Roller Blinds",
        category: "roller",
        image: "./assets/Portfolio/29.jpeg"
    },
    {
        id: 9,
        title: "Roller Blinds",
        category: "roller",
        image: "./assets/Portfolio/30.jpeg"
    },
    {
        id: 9,
        title: "Wooden venetian Blinds",
        category: "wooden",
        image: "./assets/Portfolio/31.jpeg"
    },
    {
        id: 9,
        title: "Wooden venetian Blinds",
        category: "wooden",
        image: "./assets/Portfolio/32.jpeg"
    },
    {
        id: 9,
        title: "Aluminium venetian Blinds",
        category: "alum",
        image: "./assets/Portfolio/36.jpg"
    },
    {
        id: 9,
        title: "Aluminium venetian Blinds",
        category: "alum",
        image: "./assets/Portfolio/37.jpg"
    },
    {
        id: 9,
        title: "Aluminium venetian Blinds",
        category: "alum",
        image: "./assets/Portfolio/38.jpg"
    },
    {
        id: 9,
        title: "Wooden venetian Blinds",
        category: "wooden",
        image: "./assets/Portfolio/39.jpg"
    },
    {
        id: 9,
        title: "Wooden venetian Blinds",
        category: "wooden",
        image: "./assets/Portfolio/40.jpg"
    },
    {
        id: 9,
        title: "Aluminium venetian Blinds",
        category: "alum",
        image: "./assets/Portfolio/41.jpg"
    },
    {
        id: 9,
        title: "Wooden venetian Blinds",
        category: "wooden",
        image: "./assets/Portfolio/42.jpg"
    },
    {
        id: 9,
        title: "Aluminium venetian Blinds",
        category: "alum",
        image: "./assets/Portfolio/43.jpg"
    },
    {
        id: 9,
        title: "Aluminium venetian Blinds",
        category: "alum",
        image: "./assets/Portfolio/44.jpg"
    },
];

let displayedProjects = 6;
let currentFilter = 'all';

function createGalleryItem(project) {
    return `
        <div class="gallery-item" data-category="${project.category}">
            <img src="${project.image}" alt="${project.title}" loading="lazy">
            <div class="gallery-overlay">
                <h3>${project.title}</h3>
            </div>
        </div>
    `;
}

function renderGallery() {
    const gallery = document.getElementById('gallery');
    const filteredProjects = currentFilter === 'all'
        ? projects.slice(0, displayedProjects)
        : projects.filter(p => p.category === currentFilter).slice(0, displayedProjects);

    gallery.innerHTML = filteredProjects.map(createGalleryItem).join('');

    // Update load more button visibility
    const loadMoreBtn = document.getElementById('loadMore');
    const totalFiltered = currentFilter === 'all' ? projects.length : projects.filter(p => p.category === currentFilter).length;
    loadMoreBtn.style.display = displayedProjects >= totalFiltered ? 'none' : 'block';
}

function filterProjects(category) {
    currentFilter = category;
    displayedProjects = 6;

    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-filter="${category}"]`).classList.add('active');

    // Add animation delay for smooth transition
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => item.classList.add('hidden'));

    setTimeout(() => {
        renderGallery();
    }, 300);
}

function loadMore() {
    displayedProjects += 3;
    renderGallery();
}

// Event listeners
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        filterProjects(btn.dataset.filter);
    });
});

document.getElementById('loadMore').addEventListener('click', loadMore);

// Initial render
renderGallery();

// Add smooth scroll animation on load
window.addEventListener('load', () => {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
});