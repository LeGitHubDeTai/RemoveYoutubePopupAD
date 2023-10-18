// Fonction pour vérifier et supprimer l'élément
function supprimerElementAutomatiquement() {
    var elementASupprimer = document.querySelector('ytd-enforcement-message-view-model');
    var elementASupprimer2 = document.querySelector('tp-yt-iron-overlay-backdrop');
    var videoPlayer = document.querySelector('video');
    if (elementASupprimer) {
        elementASupprimer.remove();
        console.log('AH AHHHHHHH !');
        if (videoPlayer) {
            videoPlayer.play();
        } else {
            console.log("Aucun lecteur vidéo trouvé sur la page.");
        }
    }
    if (elementASupprimer2) {
        elementASupprimer2.remove();
        console.log('AH AHHHHHHH !');
        if (videoPlayer) {
            videoPlayer.play();
        } else {
            console.log("Aucun lecteur vidéo trouvé sur la page.");
        }
    }
    console.log('RIEN A BLOQUE');
}

// Vérifier et supprimer l'élément toutes les 1 seconde (ajustable)
var intervalID = setInterval(supprimerElementAutomatiquement, 1000);