// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});

// Scroll animation on buttons (e.g., "View Work")
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// script.js
const toggleBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("navbar-menu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

// Optional: Show the first slide immediately
showSlide(currentSlide);

  const feedbackBtn = document.getElementById("feedback-btn");
  const feedbackModal = document.getElementById("feedback-modal");
  const submitFeedback = document.getElementById("submit-feedback");
  const thankYouMsg = document.getElementById("thank-you-msg");

  // Open modal
  feedbackBtn.addEventListener("click", () => {
    feedbackModal.style.display = "flex";
  });

  // Submit feedback
  submitFeedback.addEventListener("click", () => {
    thankYouMsg.style.display = "block"; // show thank you
    document.getElementById("feedback-text").value = ""; // clear input

    // hide modal after 2 sec
    setTimeout(() => {
      feedbackModal.style.display = "none";
      thankYouMsg.style.display = "none";
    }, 2000);
  });

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === feedbackModal) {
      feedbackModal.style.display = "none";
    }
  });
