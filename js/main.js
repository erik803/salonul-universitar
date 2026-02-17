/**
 * Salonul Universitar - Main JavaScript
 */

// Loading Screen
const loadingScreen = document.getElementById('loadingScreen');

// Hide loading screen when page is fully loaded
window.addEventListener('load', () => {
    // Small delay to ensure smooth transition
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            // Remove from DOM after transition completes
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }
    }, 300);
});

// Fallback: Hide loader after 3 seconds even if load event doesn't fire
setTimeout(() => {
    if (loadingScreen && !loadingScreen.classList.contains('hidden')) {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }
}, 3000);

// Navigation
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

// Mobile navigation toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navToggle.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Navbar scroll effect - optimized with requestAnimationFrame
let navbarTicking = false;
window.addEventListener('scroll', () => {
    if (!navbarTicking) {
        window.requestAnimationFrame(() => {
            if (window.pageYOffset > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            navbarTicking = false;
        });
        navbarTicking = true;
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Ensure light mode (dark mode disabled for this seasonal design)
document.body.classList.remove('dark-mode');
localStorage.setItem('darkMode', 'disabled');

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, observerOptions);

// Observe pillar cards
document.querySelectorAll('.pillar-card').forEach(card => {
    observer.observe(card);
});

// Copy to clipboard for email
const emailLinks = document.querySelectorAll('.contact-link[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const email = link.getAttribute('href').replace('mailto:', '');

        // Copy to clipboard
        navigator.clipboard.writeText(email).then(() => {
            // Add copied class for visual feedback
            link.classList.add('copied');

            // Remove class after animation
            setTimeout(() => {
                link.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy email:', err);
        });
    });
});

// Image lazy loading with fade-in effect
const images = document.querySelectorAll('img');

images.forEach(img => {
    // If image is already loaded (cached)
    if (img.complete) {
        img.classList.add('loaded');
    } else {
        // Add loaded class when image loads
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });

        // Handle loading errors gracefully
        img.addEventListener('error', () => {
            img.classList.add('loaded');
        });
    }
});
