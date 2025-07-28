    document.addEventListener("DOMContentLoaded", function() {
      // Mobile Navigation Toggle
      const mobileToggle = document.querySelector(".mobile-toggle");
      const navLinks = document.querySelector(".nav-links");
      
      mobileToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
      });
      
      // Close mobile menu when clicking a link
      const navItems = document.querySelectorAll(".nav-links a");
      navItems.forEach(item => {
        item.addEventListener("click", function() {
          navLinks.classList.remove("active");
        });
      });
      
      // Header scroll effect
      const header = document.querySelector("header");
      window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });
      
      // Animate header elements on load
      setTimeout(() => {
        document.querySelector('.logo').classList.add('visible');
        document.querySelector('.nav-links').classList.add('visible');
        document.querySelector('.social-icons').classList.add('visible');
      }, 500);
      
      // Menu Tab Functionality
      const tabBtns = document.querySelectorAll(".tab-btn");
      const menuItems = document.querySelectorAll(".menu-item");
      
      tabBtns.forEach(btn => {
        btn.addEventListener("click", function() {
          // Remove active class from all buttons
          tabBtns.forEach(b => b.classList.remove("active"));
          // Add active class to clicked button
          this.classList.add("active");
          
          const category = this.getAttribute("data-category");
          
          // Show/hide menu items based on category
          menuItems.forEach(item => {
            if (item.getAttribute("data-category") === category || category === "all") {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          });
        });
      });
      
      // Reservation Form Submission
      const bookingForm = document.getElementById("bookingForm");
      if (bookingForm) {
        bookingForm.addEventListener("submit", function(e) {
          e.preventDefault();
          alert("Thank you for your reservation! We'll confirm shortly.");
          bookingForm.reset();
        });
      }
      
      // Contact Form Submission
      const contactForm = document.getElementById("contactForm");
      if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
          e.preventDefault();
          alert("Thank you for your message! We'll get back to you soon.");
          contactForm.reset();
        });
      }
      
      // Gallery Lightbox (simplified)
      const galleryItems = document.querySelectorAll(".gallery-item");
      galleryItems.forEach(item => {
        item.addEventListener("click", function() {
          alert("Image enlarged - in a full implementation this would open a lightbox");
        });
      });
      
      // Set minimum date for reservation to today
      const today = new Date().toISOString().split('T')[0];
      document.getElementById("date").min = today;
      
      // Intersection Observer for scroll animations
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };
      
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            // Uncomment below if you want elements to fade out when leaving viewport
            // entry.target.classList.remove('visible');
          }
        });
      }, observerOptions);
      
      // Observe all sections
      document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
      });
      
      // Observe footer
      observer.observe(document.querySelector('footer'));
    });