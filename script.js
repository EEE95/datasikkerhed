//skiftende overskift - forside
const changingTitle = document.getElementById('anden-titel');
const titles = ['Spoofing', 'Phishing', 'Identitetstyveri', 'DDoS angreb', 'SQL injection', 'Skimming', 'Vishing', 'Sniffing', 'Keylogging'];
let currentIndex = 0;
let currentTitle = '';

function writeTitle() {
  if (currentTitle.length < titles[currentIndex].length) {
    currentTitle = titles[currentIndex].substring(0, currentTitle.length + 1);
    changingTitle.innerText = currentTitle;
    setTimeout(writeTitle, 100); 
  } else {
    setTimeout(eraseTitle, 1000); 
  }
}

function eraseTitle() {
  if (currentTitle.length > 0) {
    currentTitle = currentTitle.substring(0, currentTitle.length - 1);
    changingTitle.innerText = currentTitle;
    setTimeout(eraseTitle, 100); 
  } else {
    currentIndex = (currentIndex + 1) % titles.length;
    setTimeout(writeTitle, 1000); 
  }
}

writeTitle();

//udviddelse af info-box
document.querySelectorAll('.box h2').forEach((accordionToggle) => { 
    accordionToggle.addEventListener('click', () => { 
    const accordionItem = accordionToggle.parentNode; 
    const accordionContent = accordionToggle.nextElementSibling; 
  
     if (accordionContent.style.maxHeight) { 
         accordionContent.style.maxHeight = null; 
         accordionItem.classList.remove('active'); 
        } else {
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'; 
              accordionItem.classList.add('active'); 
          }
      });
  });

//senarie

//navigation
const currentPage = window.location.href.split('/').pop().split('.')[0];
const links = document.querySelectorAll('footer nav ul li a');

links.forEach((link) => {
  const linkToCurrentPage = link.href.split('/').pop().split('.')[0];
  if (linkToCurrentPage === currentPage) {
    link.classList.add('active');
  }
});