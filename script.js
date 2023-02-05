/**
 * Cache un élément html
 * 
 * @param {HTMLElement} element
 */
function cacherElt(element) {
    element.style.display = "none";
}

/**
 * Affiche un élément html
 * 
 * @param {HTMLElement} element
 */
function afficherElt(element) {
    element.style.display = "block";
}

// Début du code js exécuté au chargement de la page
document.addEventListener('DOMContentLoaded', function() {  // Attente que le DOM soit prêt
    
    console.log("Je démarre le code js");

    let sonSuplementaire = false;
    let effetSelectionne = "normal";
    let HohoAJouer = new Audio('sound/Hoho.mp3');
    let HohoLoop = false;

    // On récupère les éléments du DOM
    const btn = document.getElementById("HohoSound");

    //Bouton volume
    const btnVolume = document.getElementById("boutonVolume");

    //Liste effet
    const divEffet = document.getElementById("divEffet");
    const selectionEffet = document.getElementById("selectionEffet");

    //Switch
    const btnLoop = document.getElementById("switchBoucleMusique");
    const divLoop = document.getElementById("divSwitch");

    cacherElt(divEffet);


    // On ajoute un écouteur d'événement sur le bouton
    btn.addEventListener("click", function() {
        HohoAJouer.pause()
        if (!sonSuplementaire) {
            sonSuplementaire = true;
            afficherElt(divEffet);
        }
        /* sélectionne le bon fichier correspondant à l'effet choisi parmi :
           - reverberation
           - reverse
           - aigu
           - distortion
           - grave
           - normal
         */
        switch (effetSelectionne) {
        case "normal":
            HohoAJouer = new Audio('sound/Hoho.mp3');
            break;
        case "reverberation":
            HohoAJouer = new Audio('sound/HohoReverb.mp3');
            break;
        case "reverse":
            HohoAJouer = new Audio('sound/HohoReverse.mp3');
            break;
        case "aigu":
            HohoAJouer = new Audio('sound/HohoAigu.mp3');
            break;
        case "distortion":
            HohoAJouer = new Audio('sound/HohoDistortion.mp3');
            break;
        case "grave":
            HohoAJouer = new Audio('sound/HohoGrave.mp3');
            break;
        }
        HohoAJouer.loop = HohoLoop;
        console.log("Son bouclé : " + HohoAJouer.loop);
        HohoAJouer.play().then(() => console.log("Son joué"));

    });

    selectionEffet.addEventListener("change", function() {
        effetSelectionne = selectionEffet.value;
    });

    divLoop.addEventListener("click", function() {
        if (!HohoLoop) {
            HohoLoop = true;
        } else {
            HohoLoop = false;
            HohoAJouer.pause();
        }
        divLoop.classList.toggle("switchOn");

        console.log("Switch cliqué. Son bouclé : " + HohoLoop)
    });

}); // Fin de l'attente que le DOM soit prêt