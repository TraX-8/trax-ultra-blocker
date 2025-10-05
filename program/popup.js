const toggleBtn = document.getElementById("toggle");
const statusEl = document.getElementById("status");
const websiteBtn = document.getElementById("website");
let enabled = true;

toggleBtn.addEventListener("click", () => {
  enabled = !enabled;
  chrome.runtime.sendMessage({ action: "toggleBlocking", enabled });

  if (enabled) {
    statusEl.innerHTML = "Le bloqueur est <strong>activé</strong>.";
    toggleBtn.textContent = "Désactiver";
    toggleBtn.classList.remove("active");
  } else {
    statusEl.innerHTML = "Le bloqueur est <strong>désactivé</strong>.";
    toggleBtn.textContent = "Activer";
    toggleBtn.classList.add("active");
  }
});
websiteBtn.addEventListener("click", () => {
  chrome.tabs.create({ url: "http://trax8.fr.nf" });
});
