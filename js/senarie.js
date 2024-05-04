//senarie
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const bank = document.getElementById("bank");
const dao = document.getElementById("dao");

bank.addEventListener('click', () => {
  changeSenarie(1); 
});


dao.addEventListener('click', () => {
  changeSenarie(7); 
});

let state = {};

function changeSenarie(senarieId) {
  state = {};
  showTextNode(senarieId);
}

function startSenarie() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text 
  changeBackground(textNodeIndex);
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
    case 7:
      body.style.backgroundImage = 'url("img/bg-start.png")';
      break;
    case 2:
    case 11:
    case 15:
      body.style.backgroundImage = 'url("img/bg-hacker-meget-sur.png")';
      break;
    case 3:
    case 9:
    case 10:
    case 16:
      body.style.backgroundImage = 'url("img/bg-hacker-lidt-sur.png")';
      break;
    case 4:
    case 8:
      body.style.backgroundImage = 'url("img/bg-hacker-lidt-glad.png")';
      break;
    case 5:
    case 6:
    case 12:
    case 13:
    case 14:
      body.style.backgroundImage = 'url("img/bg-hacker-meget-glad.png")';
      break;
    default:
      body.style.backgroundImage = 'url("img/bg-start.png")'; 
      break;
  }
  body.style.backgroundSize = 'contain';
  body.style.backgroundPosition = 'center';
  body.style.backgroundRepeat = 'no-repeat';
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
    text: 'Du åbner din indbakke og ser en ny mail, der er kommet fra din bank. Emnet lyder: "Vigtig meddelelse: Bekræft din kontooplysninger". Du bemærker straks, at afsenderens e-mailadresse virker lidt underlig og ikke matcher din banks normale e-mailadresse. Hvad gør du?',
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
        text: 'Webside ser legal ud og igen for at undgå eventuelle problemer med din bankkonto giver du oplysningerne som der er bedt om. ',
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
    text: 'Resultat: Du har faldet for phishing-angrebet, og dine personlige oplysninger er nu kompromitteret. Den webside, du besøgte, var en fupside, der blev brugt til at stjæle dine oplysninger.',
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
  },

  {
    id: 7,
    text: 'Du åbner din indbakke og ser en ny mail fra DAO, de skriver at din pakke er strandet og de mangler nogle oplysninger før de kan udleverer den til dig. Hvad gør du?',
    options: [
      {
        text: 'Klikker på linket ',
        nextText: 8
      },
      {
        text: 'Går direkte til DAO’s hjemmeside',
        nextText: 9
      },
      {
        text: 'Anmelder afsender  og sletter mailen',
        nextText: 11
      },
      {
        text: 'Ignorerer den',
        nextText: 10
      }
    ]
  },

  {
    id: 8,
    text: 'Du går og venter på din pakke så du klikker på linket og ender på DAO’s hjemmeside. Her ønsker de oplysninger som navn, adresse mv. konto oplysninger til betaling for fragt som er oplyste grund til at pakken er blevet tilbageholdt. Hvad gør du?',
    options: [
      {
        text: 'Skriver oplysningerne ind og sender dem afsted.',
        nextText: 12
      },
      {
        text: 'Ringer til DAO',
        nextText: 13
      },
      {
        text: 'Lukker siden igen',
        nextText: 14
      }
    ]
  },
  
  {
    id: 9,
    text: 'Du har bestilt en pakke med levering ved DAO, som så mange gange før, men dette har du aldrig oplevet, så du går manuelt ind på DAO’s hjemmeside. Der står din pakke er på vej. hvad gør du med mailen?',
    options: [
      {
        text: 'Sletter mailen',
        nextText: 16
      },
      {
        text: 'Anmelder afsender og sletter mailen',
        nextText: 15
      },
      {
        text: 'Ingenting',
        nextText: 16
      }
    ]
  },

  {
    id: 10,
    text: 'Efter et stykke tid falder du over mailen igen, hvad gør du?',
    options: [
      {
        text: 'Sletter mailen',
        nextText: 16
      },
      {
        text: 'Anmelder afsender og sletter mailen',
        nextText: 11
      },
      {
        text: 'Ingenting',
        nextText: 16
      }
    ]
  },
  
  {
    id: 11,
    text: 'Du mistænker at mailen er fake, måske fordi du ikke har bestilt noget men der er også andre indikationer. Du vælger at anmelde afsenderen og slette mailen. Du har dermed blokeret afsender i at kunne sende dig yderligere. Yay! ',
    options: [
      {
        text: 'Tilbage til start',
        nextText: 7
      }
    ]
  },

  {
    id: 12,
    text: 'Du har faldet for phishing-angrebet, og dine personlige oplysninger er nu kompromitteret. Den webside, du besøgte, var en fupside, der blev brugt til at stjæle dine oplysninger.',
    options: [
      {
        text: 'Tilbage til start',
        nextText: 7
      }
    ]
  },

  {
    id: 13,
    text: 'DAO oplyser at de ikke har sendt en sådan mail ud. Du skynder dig at lukke for hjemmesiden igen men desværre har hackeren fået adgang til din computer.',
    options: [
      {
        text: 'Tilbage til start',
        nextText: 7
      }
    ]
  },

  {
    id: 14,
    text: 'Selvom du skynder dig at lukke for hjemmesiden igen har hackeren desværre allerede fået adgang til din computer.',
    options: [
      {
        text: 'Tilbage til start',
        nextText: 7
      }
    ]
  },

  {
    id: 15,
    text: 'DAO’s hjemmeside har bekræftet din mistanke og du anmelder og sletter derfor mailen fra “dao”. Du har dermed blokeret afsenderen i at kunne sende dig yderligere!',
    options: [
      {
        text: 'Tilbage til start',
        nextText: 7
      }
    ]
  },

  {
    id: 16,
    text: 'Du har valgt at ignorerer eller slette mailen, hvilket vil resulterer i at afsenderen kan blive ved med at sende mails til dig, i håbet om at du en dag falder for deres scam.',
    options: [
      {
        text: 'Tilbage til start',
        nextText: 7
      }
    ]
  }

]

startSenarie()