//variables 
$button = document.getElementById("button");
$select = document.getElementById("selector");
$result = document.getElementById("result");

// Selection du choix utilisateur et ordi 

function selitem() {
    $choice = $select.selectedIndex;
    $valeur = $select.options[$choice].value;
    $compChoice = Math.floor(Math.random() * 3);    
}

// Verification du gagnant

function winner() {
    if ($valeur == $compChoice) {
        $result.innerHTML = "Match Nul";
        reset();
    } else if ((($valeur == 0 ) && ($compChoice == 2)) || (($valeur == 1 ) && ($compChoice == 0))|| (($valeur == 2) && ($compChoice == 1 ))) { 
        $result.innerHTML = "Victoire ! ";
        reset();
        
    } else if ((($valeur == 0 ) && ($compChoice == 1)) || (($valeur == 1 ) && ($compChoice == 2))|| (($valeur == 2) && ($compChoice == 0 ))) {
        $result.innerHTML = "Défaite :( ";
        reset();
    } else{
        $result.innerHTML = "vous devez choisir entre pierre feuille ou ciseau";
        timer();
    }
    
        
    
}

function reset(){
    setTimeout(function(){
        $result.innerHTML = ''},3000);
    $select.selectedIndex = 0;
    $valeur = 3;
}

button.onclick = winner;