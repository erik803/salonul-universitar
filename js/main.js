/**
 * Salonul Universitar - Main JavaScript
 */

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

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
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

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved mode preference in localStorage
const savedMode = localStorage.getItem('darkMode');

// Apply dark mode by default, unless user explicitly disabled it
if (savedMode === 'disabled') {
    // User has explicitly chosen light mode
    body.classList.remove('dark-mode');
} else {
    // Default to dark mode (either first visit or user enabled it)
    body.classList.add('dark-mode');
}

// Toggle dark mode on button click
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Save preference to localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
}

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

// Parallax effect for hero watermark
const heroWatermark = document.querySelector('.hero-logo-watermark');
if (heroWatermark) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = document.querySelector('.hero').offsetHeight;

        // Only apply parallax within hero section
        if (scrolled < heroHeight) {
            const parallaxSpeed = 0.5;
            heroWatermark.style.transform = `translate(-50%, calc(-50% + ${scrolled * parallaxSpeed}px))`;
        }
    });
}

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
