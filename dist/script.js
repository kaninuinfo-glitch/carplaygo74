// CARPLAYGO Premium E-commerce Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar Background on Scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in-scroll class
    document.querySelectorAll('.fade-in-scroll').forEach(el => {
        observer.observe(el);
    });

    // Add fade-in-scroll class to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-scroll');
    });

    // Counter Animation for Trust Stats
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (element.querySelector('.stat-number')) {
                element.querySelector('.stat-number').textContent = 
                    Math.floor(current).toLocaleString() + 
                    (element.querySelector('.stat-number').textContent.includes('+') ? '+' : '');
            }
        }, 16);
    }

    // Trigger counter animation when trust section comes into view
    const trustObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    const number = parseInt(text.replace(/[^0-9]/g, ''));
                    animateCounter(stat, number);
                });
                trustObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const trustSection = document.querySelector('.trust-section');
    if (trustSection) {
        trustObserver.observe(trustSection);
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const allFaqItems = document.querySelectorAll('.faq-item');
            
            // Close all other FAQ items
            allFaqItems.forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.maxHeight = '0';
                }
            });
            
            // Toggle current FAQ item
            faqItem.classList.toggle('active');
            const answer = faqItem.querySelector('.faq-answer');
            
            if (faqItem.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });

    // Product Cards - Add to Cart Animation
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = '✓ Ajouté';
            this.style.background = '#28a745';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
            }, 2000);
            
            // Add cart animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Search Functionality
    const searchBtn = document.querySelector('.search-btn');
    const cartBtn = document.querySelector('.cart-btn');
    
    searchBtn.addEventListener('click', function() {
        // Placeholder for search functionality
        console.log('Search clicked');
    });
    
    cartBtn.addEventListener('click', function() {
        // Placeholder for cart functionality
        console.log('Cart clicked');
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (heroContent) {
            const speed = 0.5;
            heroContent.style.transform = `translateY(${scrolled * speed}px)`;
        }
    });

    // Dynamic year for footer
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear) {
        footerYear.textContent = footerYear.textContent.replace('2024', currentYear);
    }

    // Loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Print-friendly styles
    window.addEventListener('beforeprint', () => {
        document.body.classList.add('print-mode');
    });

    window.addEventListener('afterprint', () => {
        document.body.classList.remove('print-mode');
    });

    // Form validation (if any forms are added)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Placeholder for form submission
            console.log('Form submitted');
        });
    });

    // Intersection Observer for product cards animation
    const productObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        productObserver.observe(card);
    });

    // Intersection Observer for feature cards animation
    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        featureObserver.observe(item);
    });

    // Intersection Observer for review cards animation
    const reviewObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.review-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        reviewObserver.observe(card);
    });

    // Compatibility hover effects
    const brandItems = document.querySelectorAll('.brand-item');
    const phoneItems = document.querySelectorAll('.phone-item');
    
    brandItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    phoneItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Badge animation on scroll
    const badgeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'pulse 2s infinite';
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.badge').forEach(badge => {
        badgeObserver.observe(badge);
    });

    // Performance optimization
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Optimize scroll events
    const optimizedScroll = debounce(() => {
        // Scroll optimizations here
    }, 16);

    window.addEventListener('scroll', optimizedScroll);

    // Lazy loading for images (if any are added)
    const lazyLoadImages = () => {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    };

    // Initialize lazy loading if needed
    if (document.querySelectorAll('img[data-src]').length > 0) {
        lazyLoadImages();
    }

    // Cookie consent simulation
    function showCookieConsent() {
        const consent = document.createElement('div');
        consent.className = 'cookie-consent';
        consent.innerHTML = `
            <div class="cookie-content">
                <p>Nous utilisons des cookies pour améliorer votre expérience sur notre site.</p>
                <div class="cookie-buttons">
                    <button class="btn btn-primary accept-cookies">Accepter</button>
                    <button class="btn btn-secondary reject-cookies">Refuser</button>
                </div>
            </div>
        `;
        document.body.appendChild(consent);
        
        setTimeout(() => {
            consent.style.opacity = '1';
        }, 10);
        
        consent.querySelector('.accept-cookies').addEventListener('click', () => {
            consent.remove();
            localStorage.setItem('cookiesAccepted', 'true');
        });
        
        consent.querySelector('.reject-cookies').addEventListener('click', () => {
            consent.remove();
            localStorage.setItem('cookiesAccepted', 'false');
        });
    }

    // Check if cookies are already accepted
    if (!localStorage.getItem('cookiesAccepted')) {
        showCookieConsent();
    }

    // Add smooth reveal animation for elements
    const revealElements = () => {
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealElements);
    revealElements();

    // Add CSS for reveal animation
    const style = document.createElement('style');
    style.textContent = `
        .reveal {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
        }
        
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // Mobile menu swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe left - open menu
            navMenu.classList.add('active');
        }
        if (touchEndX > touchStartX + 50) {
            // Swipe right - close menu
            navMenu.classList.remove('active');
        }
    }
});

// Utility functions
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isTablet() {
    return /iPad|Android/i.test(navigator.userAgent) && window.innerWidth > 768;
}

// Performance monitoring
function monitorPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        });
    }
}

monitorPerformance();

// Error tracking
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Console log for debugging
console.log('CARPLAYGO website loaded successfully');
console.log('Version: 1.0 | Date: 2024');