// Hamburger mobile menu toggle (left-to-right sidebar)
const hamburger = document.querySelector('.nav-hamburger');
const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
const mobileNavSidebar = document.querySelector('.mobile-nav-sidebar');
const mobileNavClose = document.querySelector('.mobile-nav-close');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-menu a');

if (hamburger && mobileNavOverlay && mobileNavSidebar) {
    hamburger.addEventListener('click', function () {
        mobileNavOverlay.classList.add('active');
    });
    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', function () {
            mobileNavOverlay.classList.remove('active');
        });
    }
    // Close mobile menu when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileNavOverlay.classList.remove('active');
        });
    });
    // Optional: close menu if user clicks outside sidebar
    mobileNavOverlay.addEventListener('click', function (e) {
        if (e.target === mobileNavOverlay) {
            mobileNavOverlay.classList.remove('active');
        }
    });
}
// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header background on scroll
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission
            showNotification('Thank you! Your message has been sent successfully.', 'success');
            this.reset();
        });
    }

    // Button click animations
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Pricing card hover effects
    const pricingCards = document.querySelectorAll('.pricing-card');

    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });

    // Feature card animations on scroll
    const featureCards = document.querySelectorAll('.feature-card');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Hamburger mobile menu toggle (left-to-right sidebar)
    const hamburger = document.querySelector('.nav-hamburger');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const mobileNavSidebar = document.querySelector('.mobile-nav-sidebar');
    const mobileNavClose = document.querySelector('.mobile-nav-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-menu a');

    if (hamburger && mobileNavOverlay && mobileNavSidebar) {
        hamburger.addEventListener('click', function () {
            mobileNavOverlay.classList.add('active');
        });
        if (mobileNavClose) {
            mobileNavClose.addEventListener('click', function () {
                mobileNavOverlay.classList.remove('active');
            });
        }
        // Close mobile menu when a link is clicked
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileNavOverlay.classList.remove('active');
            });
        });
        // Optional: close menu if user clicks outside sidebar
        mobileNavOverlay.addEventListener('click', function (e) {
            if (e.target === mobileNavOverlay) {
                mobileNavOverlay.classList.remove('active');
            }
        });
    }
});

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

    // Set background color based on type
    if (type === 'success') {
        notification.style.background = '#10b981';
    } else if (type === 'error') {
        notification.style.background = '#ef4444';
    } else {
        notification.style.background = '#3b82f6';
    }

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Add ripple effect styles
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .notification {
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
`;
document.head.appendChild(style);

// Add scroll reveal animation
function revealOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .pricing-card');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Initialize reveal on load
revealOnScroll(); 