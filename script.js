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

    let sonplus = false;
    let effetSelectionne = "normal";
    let HohoAJouer = new Audio('sound/Hoho.mp3');

    // On récupère les éléments du DOM
    let btn = document.getElementById("HohoSound");
    let divEffet = document.getElementById("divEffet")
    let selectionEffet = document.getElementById("selectionEffet")

    cacherElt(divEffet);

    // On ajoute un écouteur d'événement sur le bouton
    btn.addEventListener("click", function() {
        if (!sonplus) {
            sonplus = true;
            afficherElt(divEffet);
        }
        /* selectionne le bon fichier correspondant à l'effet choisie parmi:
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
        HohoAJouer.play();
    });

    selectionEffet.addEventListener("change", function() {
        effetSelectionne = selectionEffet.value;
    });

}); // Fin de l'attente que le DOM soit prêt
