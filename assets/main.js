// reveal sections when scrolling
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting)e.target.classList.add('visible');
  });
});
document.querySelectorAll('[data-scroll]').forEach(el=>observer.observe(el));
