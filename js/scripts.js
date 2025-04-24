// JavaScript functionality for the portfolio

// Example: Toggle mobile menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

// Close menu when a menu item is clicked
document.querySelectorAll('.menu a').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.menu').classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to navigation menu items based on scroll position
window.addEventListener('scroll', highlightActiveNavItem);

function highlightActiveNavItem() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.menu a');
    
    let current = '';
    const scrollPosition = window.scrollY + 100; // Add some offset
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
}

// Form validation and submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // If validation passes, submit the form (in a real app, this would send data to a server)
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Typewriter effect for hero section
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    
    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];
        
        // Check if deleting
        if(this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        
        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        
        // Initial Type Speed
        let typeSpeed = 100;
        
        if(this.isDeleting) {
            typeSpeed /= 2;
        }
        
        // If word is complete
        if(!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// Animate elements when they come into view
function animateOnScroll() {
    const elements = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .cert-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Animated counter for skills
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target > 0 ? Math.ceil(target / (duration / 16)) : 0;
    const timer = setInterval(() => {
        start += increment;
        element.textContent = start;
        
        // Update the circle gradient
        const circle = element.closest('.counter-container').querySelector('.counter-circle');
        if (circle) {
            const percentage = (start / target) * 100;
            circle.style.background = `conic-gradient(var(--accent-primary) ${percentage}%, rgba(56, 189, 248, 0.1) 0%)`;
        }
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

function initSkillCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Certification carousel navigation
function initCertCarousel() {
    const certList = document.querySelector('.cert-list');
    if (!certList) return;
    
    const certCards = certList.querySelectorAll('.cert-card');
    if (certCards.length <= 3) return;
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'cert-next btn';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'cert-prev btn';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    
    const certNav = document.createElement('div');
    certNav.className = 'cert-nav';
    certNav.appendChild(prevBtn);
    certNav.appendChild(nextBtn);
    
    document.querySelector('.certifications .container').appendChild(certNav);
    
    let currentIndex = 0;
    const cardWidth = certCards[0].offsetWidth + 24; // Card width + gap
    const visibleCards = Math.floor(certList.offsetWidth / cardWidth);
    const maxIndex = certCards.length - visibleCards;
    
    function updateCertScroll() {
        certList.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= maxIndex;
        
        if (prevBtn.disabled) {
            prevBtn.classList.add('disabled');
        } else {
            prevBtn.classList.remove('disabled');
        }
        
        if (nextBtn.disabled) {
            nextBtn.classList.add('disabled');
        } else {
            nextBtn.classList.remove('disabled');
        }
    }
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCertScroll();
        }
    });
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCertScroll();
        }
    });
    
    // Initialize carousel
    updateCertScroll();
    
    // Update on window resize
    window.addEventListener('resize', () => {
        const newVisibleCards = Math.floor(certList.offsetWidth / cardWidth);
        const newMaxIndex = certCards.length - newVisibleCards;
        
        if (currentIndex > newMaxIndex) {
            currentIndex = Math.max(0, newMaxIndex);
        }
        
        updateCertScroll();
    });
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    // Check for saved theme preference or prefer-color-scheme
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else if (!savedTheme && !prefersDarkScheme.matches) {
        document.documentElement.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('light-mode');
        
        if (document.documentElement.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}

// Initialize all animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Init theme toggle
    initThemeToggle();
    
    // Init typewriter
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        new TypeWriter(typewriterElement, [
            'Machine Learning Engineer', 
            'Data Scientist', 
            'AI Enthusiast',
            'Problem Solver'
        ], 2000);
    }
    
    // Add glowing effect to name
    const nameText = document.getElementById('name-text');
    if (nameText) {
        setInterval(() => {
            nameText.classList.toggle('glow');
        }, 1500);
    }
    
    // Init animations
    animateOnScroll();
    highlightActiveNavItem();
    initSkillCounters();
    initCertCarousel();
    
    // Add animation classes to elements
    document.querySelectorAll('.timeline-item, .project-card, .skill-category, .cert-card').forEach(element => {
        element.classList.add('fade-in');
    });
});