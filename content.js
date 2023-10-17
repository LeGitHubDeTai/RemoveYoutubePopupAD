// content.js
function hideEnforcementMessage() {
    const enforcementMessage = document.querySelector('ytd-enforcement-message-view-model');
    if (enforcementMessage) {
        enforcementMessage.style.display = 'none';
    }
}

hideEnforcementMessage();
