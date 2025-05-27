const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

links.forEach((link, i) => {
  link.addEventListener('click', () => {
    // Remove active from all links and sections
    links.forEach(l => l.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    // Add active to clicked link and corresponding section
    link.classList.add('active');
    sections[i].classList.add('active');
  });
});


