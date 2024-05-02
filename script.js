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
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {};

function startSenarie() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text 
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function changeBackground(nextText) {
  const body = document.querySelector('body');
  switch (nextText) {
    case 1:
      body.style.backgroundImage = 'url("img/bg-start.png")';
      body.style.si
      break;
    case 2:
      body.style.backgroundImage = 'url("img/hacker.png")';
      break;
    default:
      body.style.backgroundImage = 'url("img/hero.png")'; 
      break;
  }
}


function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  console.log("Next Text ID: ", nextTextNodeId);
  changeBackground(nextTextNodeId);
  if (nextTextNodeId <= 0) {
    return startSenarie()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Du åbner din indbakke og ser en ny mail, der kommer fra din bank. Emnet lyder: "Vigtig meddelelse: Bekræft din kontooplysninger". Du bemærker straks, at afsenderens e-mailadresse virker lidt underlig og ikke matcher din banks normale e-mailadresse. Hvad gør du?',
    options: [
      {
        text: 'Du tænker, at det er bedst at følge instruktionerne for at undgå eventuelle problemer med din bankkonto.',
        nextText: 4
      },
      {
        text: 'Du bemærker de røde flag og beslutter dig for at ignorere e-mailen. Du markerer den som spam og sletter den uden at åbne den.',
        nextText: 2
      },
      {
        text: 'Du beslutter dig for at være sikker og ringer til din bank direkte for at bekræfte, om e-mailen er ægte',
        nextText: 3
      }
    ]
  },

  {
    id: 2,
    text: 'Resultat: Du har undgået at blive offer for phishing-angrebet. Ved at ignorere den mistænkelige e-mail har du beskyttet dine personlige oplysninger og undgået potentiel skade.',
    options: [
      {
        text: 'Tilbage til start',
        nextText: 1
      }
    ]
  },

  {
    id: 3,
    text: 'Resultat: Din bank fortæller dig, at de ikke har sendt nogen sådanne e-mails, og beder dig om at ignorere den og rapportere den som phishing-forsøg. Du har undgået at blive offer for svindel og har handlet proaktivt for at beskytte dine oplysninger.',
    options: [
      {
        text: 'Tilbage til start',
        nextText: 1
      }
    ]
  },

  {
    id: 4,
    text: 'Du klikker på det vedhæftede link og bliver ført til en webside, der beder om dine bankoplysninger og personlige oplysninger.',
    options: [
      {
        text: 'Igen for at undgå eventuelle problemer med din bankkonto giver du oplysningerne som der er bedt om. ',
        nextText: 5
      },
      {
        text: 'Du indser mailen ikke er fra din bank da du selv skal indføre oplysninger, du lukker straks ned for websiden, anmelder og sletter mailen.',
        nextText: 6
      }
    ]
  },  

  {
    id: 5,
    text: 'Resultat: Du har faldet for phishing-angrebet, og dine personlige oplysninger er nu kompromitteret. Den falske webside, du besøgte, var en fupside, der blev brugt til at stjæle dine oplysninger.',
    options: [
      {
        text: 'Tilbage til start',
        nextText: 1
      }
    ]
  },

  {
    id: 6,
    text: 'Resultat: Desværre har hackeren allerede fået adgang til din computer og installerede skadelig software uden din viden.',
    options: [
      {
        text: 'Tilbage til start',
        nextText: 1
      }
    ]
  }
]

startSenarie()

//navigation
const currentPage = window.location.href.split('/').pop().split('.')[0];
const links = document.querySelectorAll('footer nav ul li a');

links.forEach((link) => {
  const linkToCurrentPage = link.href.split('/').pop().split('.')[0];
  if (linkToCurrentPage === currentPage) {
    link.classList.add('active');
  }
});