const images = [
  "./static/files/images/vibe-coding-1.png",
  "./static/files/images/gameboy-repairman-1.png"
];

document.querySelectorAll(".image-container").forEach(container => {
  const carouselImage = container.querySelector(".carouselImage");
  const prevBtn = container.querySelector(".prev");
  const nextBtn = container.querySelector(".next");

  let currentIndex = 0;

  function showImage(index) {
    carouselImage.src = images[index];
  }

  showImage(currentIndex);

  if (images.length > 1) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  } else {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  }
});