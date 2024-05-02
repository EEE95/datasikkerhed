//navigation
const currentPage = window.location.href.split('/').pop().split('.')[0];
const links = document.querySelectorAll('footer nav ul li a');

links.forEach((link) => {
  const linkToCurrentPage = link.href.split('/').pop().split('.')[0];
  if (linkToCurrentPage === currentPage) {
    link.classList.add('active');
  }
});