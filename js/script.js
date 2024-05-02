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