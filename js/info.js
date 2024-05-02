//udviddelse af info-box
// Definer en array med emner
const emner = [
    {
      overskrift: "Hvordan beskytter man sig bedst?",
      indhold: "Nogle af de bedste måder at beskytte sig mod phishing inkluderer at være opmærksom på mistænkelige e-mails eller beskeder, undgå at klikke på usikre links eller downloade vedhæftede filer fra ukendte kilder, og bruge antivirussoftware og firewalls. Desuden kan man bekræfte anmodninger om følsomme oplysninger direkte hos den påståede afsender via telefon eller en anden kommunikationskanal."
    },
    {
      overskrift: "Hvem er mest udsat?",
      indhold: "Alle, der bruger internettet og e-mail, kan potentielt blive udsat for phishing. Dog er nogle mere udsatte end andre, herunder personer med begrænset it-viden, dem der ikke er opmærksomme på phishing-advarsler, og dem der arbejder i virksomheder med dårlig it-sikkerhedskultur."
    },
    {
      overskrift: "Hvad skal jeg gøre, hvis jeg er blevet udsat for hacking?",
      indhold: "Hvis du tror, at du er blevet udsat for phishing, er det vigtigt at handle hurtigt. Stop med at interagere med den mistænkelige besked eller det mistænkelige websted. Rapporter hændelsen til den påståede organisation, såsom din bank eller it-afdeling på din arbejdsplads. Skift adgangskoder til berørte konti og overvåg dine bankoplysninger og kreditkort for unormale aktiviteter. Hvis du er blevet offer for phishing, er det også en god idé at informere dine kontakter for at advare dem."
    },
    {
      overskrift: "Hvad sker der hvis jeg klikker på linket, men ikke udlevere nogle oplysninger?",
      indhold: "Selvom du ikke giver nogen oplysninger efter at have klikket på et phishing-link, kan hackeren stadig have adgang til din computer ved at udnytte sårbarheder eller installere skadelig software uden din viden. Derfor er det vigtigt at være forsigtig med at klikke på ukendte links og at holde din computer opdateret med de seneste sikkerhedsopdateringer."
    }
  ];
  
  // Lyt efter klik på hver .box og opdater indholdet af .indhold
  document.querySelectorAll('.box').forEach((box, index) => {
    box.addEventListener('click', () => {
      // Opdater indholdet af .indhold med det tilsvarende emne
      document.getElementById('indholdet').innerHTML = `
        <h2>${emner[index].overskrift}</h2>
        <p>${emner[index].indhold}</p>
      `;
    });
  });
  
