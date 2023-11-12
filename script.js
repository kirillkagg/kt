window.addEventListener('DOMContentLoaded', (event) => {
  // Add smooth scrolling to all links
  const links = document.querySelectorAll('.text-wrapper, .text-wrapper-2, .text-wrapper-3, .text-wrapper-4');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      // Use event.target.hash to get the hash part of the URL
      const targetId = event.target.hash.substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        const headerHeight = 92.65;
        const scrollOffset = target.offsetTop - headerHeight;

        window.scrollTo({
          top: scrollOffset,
          behavior: 'smooth'
        });
      }
    });
  });
});
