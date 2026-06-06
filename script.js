// ========================================
// Navigation Menu Toggle
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // ========================================
    // Scroll Animation for Elements
    // ========================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.skill-category, .experience-item, .education-item, .certifications-list, .achievements-list');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // ========================================
    // Smooth Scroll for Navigation Links
    // ========================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========================================
    // Active Navigation Link Highlighting
    // ========================================

    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // ========================================
    // Add 'active' style to current nav link
    // ========================================

    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: var(--primary-color);
            font-weight: 700;
        }
        .nav-link.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);

    // ========================================
    // Hamburger Animation
    // ========================================

    const updateHamburger = () => {
        const hamburgerSpans = document.querySelectorAll('.hamburger span');
        if (navMenu.classList.contains('active')) {
            hamburgerSpans[0].style.transform = 'rotate(45deg) translateY(15px)';
            hamburgerSpans[1].style.opacity = '0';
            hamburgerSpans[2].style.transform = 'rotate(-45deg) translateY(-15px)';
        } else {
            hamburgerSpans[0].style.transform = '';
            hamburgerSpans[1].style.opacity = '1';
            hamburgerSpans[2].style.transform = '';
        }
    };

    if (hamburger) {
        hamburger.addEventListener('click', updateHamburger);
    }

    // ========================================
    // Add subtle scroll effect to navbar
    // ========================================

    const navbar = document.querySelector('.navbar');
    let lastScrollY = 0;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
        }
        lastScrollY = window.scrollY;
    });

    // ========================================
    // Experience Timeline Stagger Animation
    // ========================================

    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.style.opacity = '0';
        item.style.animation = 'fadeInUp 0.6s ease forwards';
    });

    // Add fadeInUp animation
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(animationStyle);

    // ========================================
    // Social Links - Open in new tab
    // ========================================

    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // ========================================
    // Add focus states for accessibility
    // ========================================

    const focusStyle = document.createElement('style');
    focusStyle.textContent = `
        .nav-link:focus,
        .btn:focus,
        .social-link:focus,
        a:focus {
            outline: 2px solid var(--primary-color);
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(focusStyle);

    // ========================================
    // Lazy Load Images (if any added in future)
    // ========================================

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ========================================
    // Console Welcome Message
    // ========================================

    console.log('%cWelcome to Lesly Max D\'Souza\'s Portfolio! 👋', 'font-size: 20px; color: #667eea; font-weight: bold;');
    console.log('%cBuilt with HTML, CSS, and JavaScript', 'font-size: 14px; color: #764ba2;');
    console.log('%cFeel free to reach out at: leslymxds16@gmail.com', 'font-size: 12px; color: #666;');
});

// ========================================
// Mobile Menu Close on Window Resize
// ========================================

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    }
});
