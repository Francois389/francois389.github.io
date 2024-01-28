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

    // Variables globales
    let sonSuplementaire = false;
    let effetSelectionne = "normal";
    let HohoAJouer = new Audio('sound/Hoho.mp3');
    let sonBoucle = false;

    // On récupère les éléments du DOM
    const btn = document.getElementById("HohoSound");
    //Les effets
    const selectionEffet = document.getElementById("selectionEffet");
    const divEffet = document.getElementById("liste");
    //Le switch
    const divLoop = document.getElementById("switch");
    const switchBoucle = document.getElementById("switchBoucleMusique");
    //Le choix du volume
    const divVolume = document.getElementById("volume");
    const sliderVolume = document.getElementById("niveauVolume");

    // Ecouteurs d'événements
    btn.addEventListener("click", jouerSon );
    selectionEffet.addEventListener("change", updateEffetSelection);
    switchBoucle.addEventListener("click", toggleBoucleSon);
    sliderVolume.addEventListener("input", updateVolume);

    function toggleBoucleSon() {
        if (!sonBoucle) {
            sonBoucle = true;
        } else {
            sonBoucle = false;
            HohoAJouer.pause();
        }
        console.log("Switch cliqué. Son bouclé : " + sonBoucle)
    }

    function updateEffetSelection() {
        effetSelectionne = selectionEffet.value;
    }

    function updateVolume() {
        HohoAJouer.volume = sliderVolume.value;
    }

    function jouerSon() {
        HohoAJouer.pause()
        if (!sonSuplementaire) {
            sonSuplementaire = true;
            afficherElt(divEffet);
            afficherElt(divVolume);
            afficherElt(divLoop);
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
                HohoAJouer.src = "sound/Hoho.mp3";
                break;
            case "reverberation":
                HohoAJouer.src = "sound/HohoReverb.mp3";
                break;
            case "reverse":
                HohoAJouer.src = "sound/HohoReverse.mp3";
                break;
            case "aigu":
                HohoAJouer.src = "sound/HohoAigu.mp3";
                break;
            case "distortion":
                HohoAJouer.src = "sound/HohoDistortion.mp3";
                break;
            case "grave":

                HohoAJouer = new Audio('sound/HohoGrave.mp3');
                break;
        }
        console.log("Src : " + HohoAJouer.src + " Volume : " + HohoAJouer.volume)
        HohoAJouer.loop = sonBoucle;
        console.log("Son bouclé : " + HohoAJouer.loop);
        HohoAJouer.play().then(() => console.log("Son joué : " + effetSelectionne));
    }

    //Initialisation
    cacherElt(divEffet);
    cacherElt(divVolume);
    cacherElt(divLoop);
    HohoAJouer.volume = sliderVolume.value;

}); // Fin de l'attente que le DOM soit prêt