document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu after selecting an item
            mobileMenu.classList.remove('active');
        });
    });

    // // Image Slideshow
    // const slides = document.querySelectorAll('.slide');
    // let currentSlide = 0;

    // function showSlide(index) {
    //     // Remove active class from all slides
    //     slides.forEach(slide => slide.classList.remove('active'));
        
    //     // Add active class to current slide
    //     slides[index].classList.add('active');
    // }

    // function nextSlide() {
    //     currentSlide = (currentSlide + 1) % slides.length;
    //     showSlide(currentSlide);
    // }

    // // Change slide every 4 seconds
    // setInterval(nextSlide, 4000);

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});