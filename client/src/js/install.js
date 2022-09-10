const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
  });
  

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
    if (deferredPrompt !== null) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        deferredPrompt = null;
      }
    }
  });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
    deferredPrompt = null;
    console.log("Thank you for installing JATE Just Another Text Editor");
  });
