// fade in sections when entering viewport
const items = document.querySelectorAll('[data-scroll]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
items.forEach(item => observer.observe(item));
