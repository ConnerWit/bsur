let currentIndex = 0;
const reviews = document.querySelectorAll(".review-item");
const totalReviews = reviews.length;

function showReview(index) {
  reviews.forEach((review, i) => {
    review.classList.toggle("active", i === index);
  });
}

showReview(currentIndex);

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalReviews;
  showReview(currentIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalReviews) % totalReviews;
  showReview(currentIndex);
});
