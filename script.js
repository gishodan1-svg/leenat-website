// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Hero image slider
const heroImage = document.querySelector(".hero-image img");

const images = [
  "IMG-20260713-WA0001.jpg",
  "IMG-20260713-WA0002.jpg",
  "IMG-20260713-WA0003.jpg",
  "images (1).jpeg",
  "images.jpeg"
];

let current = 0;

setInterval(() => {
  if (heroImage) {
    current = (current + 1) % images.length;
    heroImage.src = images[current];
  }
}, 3000);
