/**
 * Wyzard's Ark Portfolio Core Interactions System
 * Handles: Project Scroller, Auto Copyright Updating, and Scroll-to-Reveal Effects
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // 1. AUTOMATIC COPYRIGHT YEAR UPDATE
    // ==========================================================================
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        // Safely updates the footer layout token dynamically from system clock
        yearSpan.textContent = new Date().getFullYear();
    }


    // ==========================================================================
    // 3. SCROLL RISE-UP EFFECTS SYSTEM (INTERSECTION OBSERVER)
    // ==========================================================================
    const revealElements = document.querySelectorAll('.reveal-up');

    if (revealElements.length > 0) {
        // Configure the observer view thresholds
        const observerOptions = {
            root: null,          // Track intersection across browser viewport bounds
            rootMargin: '0px',
            threshold: 0.35      // Animate as soon as 35% of the element bounds overlap frame
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Activate structural transition CSS classes
                    entry.target.classList.add('is-visible');
                    // Immediately disconnect tracking state to keep memory performant
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Bind the active tracking agent loop directly onto your targeted layout markers
        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }


    // --- RANDOMIZED FOOTER LOGO DELAYS ---
    const footerLogos = document.querySelectorAll('.footer-logo-container .footer-logo-img');
    
    footerLogos.forEach(logo => {
        // Generates a random delay between 0.0 and 0.6 seconds
        const randomDelay = (Math.random() * 0.6).toFixed(2);
        logo.style.transitionDelay = `${randomDelay}s`;
    });

});















// ==========================================================================
    // 4. MOBILE DRAWER NAVIGATION INTERACTION CONTROLLER
    // ==========================================================================
    const burgerBtn = document.querySelector('.mobile-burger-btn');
    const closeBtn = document.querySelector('.close-drawer-btn');
    const drawerMenu = document.querySelector('.mobile-menu-drawer');
    const drawerOverlay = document.querySelector('.drawer-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-item');

    // Consolidated toggle layout functions
    const openDrawer = () => {
        drawerMenu.classList.add('is-open');
        drawerOverlay.classList.add('is-visible');
        document.body.style.overflow = 'hidden'; /* Disables rear window background tracking scale */
    };

    const closeDrawer = () => {
        drawerMenu.classList.remove('is-open');
        drawerOverlay.classList.remove('is-visible');
        document.body.style.overflow = ''; /* Restores natural vertical viewport travel bounds */
    };

    // Bind interaction trigger assignments
    if (burgerBtn && closeBtn && drawerMenu && drawerOverlay) {
        burgerBtn.addEventListener('click', openDrawer);
        closeBtn.addEventListener('click', closeDrawer);
        drawerOverlay.addEventListener('click', closeDrawer);

        // Ensure clicking any individual navigation target instantly auto-retracts panel frame smoothly
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeDrawer);
        });
    }




















    document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("image-lightbox");
    const lightboxImg = document.getElementById("lightbox-target-img");
    const closeBtn = document.querySelector(".lightbox-close-btn");
    
    // 1. Find all expandable images inside your project media gallery grid
    const galleryImages = document.querySelectorAll(".project-media-gallery .gallery-item img");

    galleryImages.forEach(image => {
        image.addEventListener("click", () => {
            // Extract image source and assign it directly to the lightbox container target
            lightboxImg.src = image.src;
            lightboxImg.alt = image.alt;
            
            // Toggle visibility classes to run CSS animations
            lightbox.classList.add("active");
            lightbox.setAttribute("aria-hidden", "false");
        });
    });

    // 2. Click logic to close the lightbox via the close button
    closeBtn.addEventListener("click", closeLightbox);

    // 3. Click logic to close the lightbox by clicking anywhere on the dark background
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // 4. Accessible keyboard controls (Press Escape key to dismiss)
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.classList.contains("active")) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
    }
});