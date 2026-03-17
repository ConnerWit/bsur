document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-item h3").forEach(question => {
    question.addEventListener("click", () => {
      question.parentElement.classList.toggle("active");
    });
  });
});
