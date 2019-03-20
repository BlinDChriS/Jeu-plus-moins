const jeu = document.getElementById('jeu');
const jouer = document.getElementById('jouer');
let nbEssais = document.getElementById('nbEssais');
let essaisRestant = 10;
nbEssais.textContent = essaisRestant;


let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
jeu.removeChild(div1);
jeu.removeChild(div2);

let formElt = document.createElement("form");
formElt.id = "formElt";


let inputReponse = document.createElement("input");
inputReponse.type = "text";
inputReponse.id = "reponse";
inputReponse.required = true;
inputReponse.placeholder = "Entre ici ta réponse";

let btnValider = document.createElement("button");
btnValider.type = "submit";
btnValider.value = "Envoyer";
btnValider.textContent = "Envoyer";
btnValider.id = "valider";


let solution = Math.floor(Math.random() * 100) + 1;
/*console.log(solution);*/




let bonneReponse = document.createElement("p");
bonneReponse.id = "bonneReponse";
let gameOver = document.createElement("p");
gameOver.id = "gameOver";
let liste = document.createElement("ul");
liste.id= "resultat";



// -------------------------------------click sur Jouer-----------------------------//

jouer.addEventListener("click", function() {
  jeu.removeChild(jouer);
  jeu.appendChild(div1);
  jeu.appendChild(div2);
  div1.appendChild(formElt);
  formElt.appendChild(inputReponse);
  formElt.appendChild(btnValider);
  div2.appendChild(liste);
})

formElt.addEventListener("submit", function(e) {
  let reponse = document.getElementById("reponse").value;

  e.preventDefault();

  essaisRestant--;
  nbEssais.textContent = essaisRestant;
  let li = document.createElement("li");
  if ((reponse > 0) && (reponse <= 100)) {
    if ((reponse != solution) && (essaisRestant > 0)) {
      if (reponse < solution) {
        li.textContent = "La solution est plus grande que " + reponse + ". Réessaye!";
        liste.insertAdjacentElement('afterbegin', li);

      } else if (reponse > solution) {
        li.textContent = "La solution est plus petite que " + reponse + ". Réessaye!";
        liste.insertAdjacentElement('afterbegin', li);

      }

    } else if (reponse == solution) {
      div1.removeChild(formElt);
      div1.appendChild(bonneReponse);
      bonneReponse.textContent = "Bravo tu as gagné !!! La bonne réponse est " + solution;
    } else {
      div1.removeChild(formElt);
      div1.appendChild(gameOver);
      gameOver.textContent = "Perdu, la solution était " + solution + "!"
    }
  } else {
    li.textContent = "Tu sais pas lire? Entre un nombre entre 1 et 100 ;)";
        liste.insertAdjacentElement('afterbegin', li);
  }
})
