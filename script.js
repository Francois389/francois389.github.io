/**
 * Redirige l'utilisateur vers une page dans un nouvel onglet ou non.
 * @param {Text} lien
 * @param {boolean} nouveauOnglet 
 */
function RedirectionJavascript(lien,nouveauOnglet=false){
    // Fonction permettant de renvoyer vers une autre page
    if (nouveauOnglet) {
        window.open(lien,'_blank')
    } else {
        document.location.href=lien; 
    }
}

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

/**
 * Fonction utiliser sur les boutons de bootstrap.
 * Si le bouton est bleu (btn-primary), il devient gris (btn-secondary)
 * Si le bouton est gris (btn-secondary), il devient bleu (btn-primary)
 * 
 * @param {HTMLElement} element
 */
function toggleCouleurBtn(element) {
    if (element.classList.contains("btn-primary")) {
        element.classList.remove("btn-primary");
        element.classList.add("btn-secondary");
    } else {
        element.classList.remove("btn-secondary");
        element.classList.add("btn-primary");
    }
}

/**
 * Affiche un élément HTMLElement s'il est caché
 * Cache un élément HTMLElement s'il est affiché
 * 
 * @param {HTMLElement} element
 */
function toggleAffichage(element) {
    if (estAfficher(element)) {
        cacherElt(element);
    } else {
        afficherElt(element);
    }
}

/**
 * On utilise fa-spin de fontawesome pour faire tourner un element HTMLElement
 * 
 * Si l'élément HTMLElement contient la classe fa-spin, on la supprime
 * Sinon on l'ajoute
 * 
 * @param {HTMLElement} html
 */
function toggleSpin(html) {
    if (html.classList.contains("fa-spin")) {
        html.classList.remove("fa-spin");
    } else {
        html.classList.add("fa-spin");
    }    
}

/**
 * Retourne true si l'élément est affiché, false sinon
 * 
 * @param {HTMLElement} element
 * @returns {boolean} true si l'élément est affiché, false sinon
 */
function estAfficher(element) {
    return !estCacher(element)
}

/**
 * Retourne true si l'élément est caché, false sinon
 * 
 * @param {HTMLElement} element
 * @returns {boolean} true si l'élément est caché, false sinon
 */
function estCacher(element) {
    return element.style.display === "none";
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