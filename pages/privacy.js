document.addEventListener("DOMContentLoaded", () => {

  const privacyLink = document.getElementById("privacyLink");
  const modal = document.getElementById("privacyModal");
  const closeBtn = document.getElementById("closePrivacy");

  if (!privacyLink || !modal || !closeBtn) return;

  privacyLink.addEventListener("click", e => {
    e.preventDefault();
    modal.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      modal.classList.add("hidden");
    }
  });

});
