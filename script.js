document.querySelectorAll(".card").forEach(card => {
card.addEventListener("click", () => {
window.location = card.dataset.link;
});
});
