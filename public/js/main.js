document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        const mobileOverlay = document.getElementById('mobileOverlay');
        const dropdowns = document.querySelectorAll('.dropdown');

        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mainNav.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking overlay
        mobileOverlay.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mainNav.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
            
            // Close all dropdowns
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        });

        // Handle dropdowns
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector(':scope > a');
            
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    
                    // Check if this is a nested dropdown
                    const isNested = dropdown.closest('.dropdown-menu') !== null;
                    
                    if (isNested) {
                        // For nested dropdowns, just toggle current
                        dropdown.classList.toggle('active');
                    } else {
                        // For top-level dropdowns, close siblings
                        const siblings = Array.from(dropdown.parentElement.children);
                        siblings.forEach(sibling => {
                            if (sibling !== dropdown && sibling.classList.contains('dropdown')) {
                                sibling.classList.remove('active');
                                // Also close nested dropdowns
                                const nestedDropdowns = sibling.querySelectorAll('.dropdown');
                                nestedDropdowns.forEach(nested => nested.classList.remove('active'));
                            }
                        });
                        dropdown.classList.toggle('active');
                    }
                }
            });
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                mainNav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = '';
                
                // Close all mobile dropdowns
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });

        // Prevent body scroll when menu is open
        let lastScrollY = 0;
        mainNav.addEventListener('touchmove', (e) => {
            if (mainNav.classList.contains('active')) {
                e.stopPropagation();
            }
        }, { passive: false });

    // Set background images for slides
    document.querySelectorAll('.swiper-slide').forEach(slide => {
        const bgImage = slide.getAttribute('data-bg');
        if (bgImage) {
            slide.querySelector('.slide-bg').style.backgroundImage = `url('${bgImage}')`;
        }
    });

    // Initialize Swiper
    const heroSwiper = new Swiper('.hero-slider', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 2500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
}); 

////////////////////////

// Check if there are enough logos to create a smooth scrolling effect
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.logo-container');
    const width = container.scrollWidth / 2;
    
    // Set the keyframes for smoother animation
    const styleSheet = document.styleSheets[0];
    let keyframesRule;
    
    for (let i = 0; i < styleSheet.cssRules.length; i++) {
        if (styleSheet.cssRules[i].name === 'scroll') {
            keyframesRule = styleSheet.cssRules[i];
            break;
        }
    }
    
    if (keyframesRule) {
        keyframesRule.deleteRule('100%');
        keyframesRule.appendRule(`100% { transform: translateX(${-width}px); }`);
    }
});

////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
            const faqItems = document.querySelectorAll('.faq-item');
            const searchInput = document.getElementById('searchInput');
            const categoryTabs = document.querySelectorAll('.category-tab');
            const noResults = document.querySelector('.no-results');

            // Toggle FAQ items
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');
                    
                    // Close all items
                    faqItems.forEach(faq => faq.classList.remove('active'));
                    
                    // Open clicked item if it wasn't active
                    if (!isActive) {
                        item.classList.add('active');
                    }
                });
            });

            // Search functionality
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                let visibleCount = 0;

                faqItems.forEach(item => {
                    const questionText = item.querySelector('.question-text').textContent.toLowerCase();
                    const answerText = item.querySelector('.faq-answer-content').textContent.toLowerCase();
                    
                    if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
                        item.style.display = 'block';
                        visibleCount++;
                    } else {
                        item.style.display = 'none';
                    }
                });

                noResults.style.display = visibleCount === 0 ? 'block' : 'none';
            });

            // Category filtering
            categoryTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const category = this.dataset.category;
                    
                    // Update active tab
                    categoryTabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Clear search
                    searchInput.value = '';
                    
                    // Filter items
                    let visibleCount = 0;
                    faqItems.forEach(item => {
                        if (category === 'all' || item.dataset.category === category) {
                            item.style.display = 'block';
                            visibleCount++;
                        } else {
                            item.style.display = 'none';
                        }
                        item.classList.remove('active');
                    });

                    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
                });
            });
        });

/////////////////////////////////////////////////////////////////////////
// Handle thumbnail clicks
        const thumbnails = document.querySelectorAll('.thumbnail-container');
        const mainImage = document.getElementById('mainImage');
        
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                // Remove active class from all thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked thumbnail
                thumbnail.classList.add('active');
                
                // Update main image
                const newImageSrc = thumbnail.dataset.image;
                mainImage.src = newImageSrc;
            });
        });