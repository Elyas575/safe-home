// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobileMenuButton');
const navLinks = document.getElementById('navLinks');

mobileMenuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && !e.target.closest('.mobile-menu-button')) {
        navLinks.classList.remove('active');
    }
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Track extension button clicks for analytics
document.querySelectorAll('.extension-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Track conversion event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'extension_click', {
                'event_category': 'conversion',
                'event_label': 'SafeBrowse Extension'
            });
        }
        // Redirect to Chrome Web Store (replace with actual link)
        window.open('https://chrome.google.com/webstore/detail/safebrowse-content-filter/example', '_blank');
    });
});