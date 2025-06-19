// Reveal sections when scrolled into view
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100; // how early to trigger

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // in case they're already in view



// for revealing skill icons
document.querySelectorAll('.skill-icon').forEach(icon => {
    const gray = icon.querySelector('.gray');
    const color = icon.querySelector('.color');

    icon.addEventListener('mouseover', () => {
    color.style.zIndex = '2';
    gray.style.zIndex = '1';
    color.style.opacity = '1';
    gray.style.opacity = '0';
    });

    icon.addEventListener('mouseout', () => {
    gray.style.zIndex = '2';
    color.style.zIndex = '1';
    color.style.opacity = '0';
    gray.style.opacity = '1';
    });

});

