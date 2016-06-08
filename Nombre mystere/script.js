
// variables

$button = document.getElementById('button');
$choixOrdi = Math.floor(Math.random() * 100) + 1;
$error = document.getElementById('erreur');
$nombreChoix = document.getElementById('nombreChoix');
$resultat = document.getElementById('resultat');

nbrEssai = 0;


//Comparaison du choix avec le nombre choisis par l'ordinateur
function check() {
    "use strict";
    nbrEssai++;
    if ((nombreChoix.value < 0) || (nombreChoix.value > 100)) {
        erreurNombre();
    } else if (nombreChoix.value < $choixOrdi) {
        $resultat.innerHTML = "C'est plus";
    } else if (nombreChoix.value > $choixOrdi) {
        $resultat.innerHTML = "C'est moins";
    } else if (nombreChoix.value == $choixOrdi) {
        $resultat.innerHTML = "Vous avez trouve en " + nbrEssai + " essai(s) bravo";
    } else {
        erreurNombre();
    }
}

//Affiche l'erreur

function erreurNombre() {
    "use strict";
    $erreur.innerHTML = "Le nombre saisi doit se situer entre  1 et 100!";
}

$button.onclick = check;


