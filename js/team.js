document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".read-more-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".team-member");
      card.classList.toggle("expanded");
      btn.textContent = card.classList.contains("expanded") ? "Minder lezen" : "Meer lezen";
    });
  });
});
