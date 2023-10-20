function replay() {
    var videoPlayer = document.querySelector('video');
    if (videoPlayer) {
        videoPlayer.play();
    } else {
        console.log("Aucun lecteur vidéo trouvé sur la page.");
    }
}

function deletePopup(element) {
    var elementASupprimer = document.querySelector('ytd-enforcement-message-view-model');
    if (elementASupprimer) {
        elementASupprimer.remove();
        console.log('AH AHHHHHHH !');
        replay();
    }
}

// Fonction pour vérifier et supprimer l'élément
function supprimerElementAutomatiquement() {
    // AD BLOCKER
    deletePopup("ytd-enforcement-message-view-model");
    deletePopup("tp-yt-iron-overlay-backdrop");

    // USER PRESENCE
    deletePopup("tp-yt - paper - dialog");
}

// Vérifier et supprimer l'élément toutes les 1 seconde (ajustable)
var intervalID = setInterval(supprimerElementAutomatiquement, 1000);