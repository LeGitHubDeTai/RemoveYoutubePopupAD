/*----------------------------------------------------------------------------------------------\
|  _____      _   __ _             _ _         ____   ___ ____  _    ______   ___ ____  _  _    |
| /__   \__ _(_) / _\ |_ _   _  __| (_) ___   |___ \ / _ \___ \/ |  / /___ \ / _ \___ \| || |   |
|   / /\/ _` | | \ \| __| | | |/ _` | |/ _ \    __) | | | |__) | | / /  __) | | | |__) | || |_  |
|  / / | (_| | | _\ \ |_| |_| | (_| | | (_) |  / __/| |_| / __/| |/ /  / __/| |_| / __/|__   _| |
|  \/   \__,_|_| \__/\__|\__,_|\__,_|_|\___/  |_____|\___/_____|_/_/  |_____|\___/_____|  |_|   |
|                                                                                               |
\----------------------------------------------------------------------------------------------*/
function replay() {
    var videoPlayer = document.querySelector('video');
    if (videoPlayer) {
        videoPlayer.play();
    } else {
        console.log("Aucun lecteur vidéo trouvé sur la page.");
    }
}

function deletePopup(element) {
    var elementASupprimer = document.querySelector(element);
    if (elementASupprimer) {
        elementASupprimer.remove();
        console.log('AH AHHHHHHH !');
        replay();
    }
}

function removeClass(element, classname) {
    const div = document.querySelector(element);
    div.classList.remove(classname);
}

function YOUTUBE() {
    // AD BLOCKER
    deletePopup("ytd-enforcement-message-view-model");
    deletePopup("tp-yt-iron-overlay-backdrop");

    // USER PRESENCE
    deletePopup("yt-confirm-dialog-renderer");
    deletePopup("tp-yt - paper - dialog");
}

function MARMITON() {
    deletePopup("#didomi-popup");
    removeClass('body', 'didomi-popup-open');
}

// Fonction pour vérifier et supprimer l'élément
function supprimerElementAutomatiquement() {

    console.log("EXTENSION !", window.location.hostname);

    switch (window.location.hostname) {
        case 'www.youtube.com':
            YOUTUBE();
            break;
        case 'www.marmiton.org':
            MARMITON();
            break;
        default:
            console.log('Auto Hidder: no runned')
    }
}

// Vérifier et supprimer l'élément toutes les 1 seconde (ajustable)
var intervalID = setInterval(supprimerElementAutomatiquement, 1000);