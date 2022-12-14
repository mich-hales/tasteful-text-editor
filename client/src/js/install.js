const butInstall = document.getElementById('buttonInstall');

// installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// displays install prompt on click event
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    } 
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// clears prompt allowing app to be installed
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
