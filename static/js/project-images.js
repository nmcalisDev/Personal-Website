document.querySelectorAll(".image-container").forEach(container => {
  const carouselImage = container.querySelector(".carouselImage");
  const prevBtn = container.querySelector(".prev");
  const nextBtn = container.querySelector(".next");

  // Parse images from the data attribute
  const images = JSON.parse(container.getAttribute("data-images") || "[]");
  let currentIndex = 0;

  // If no images, hide controls and skip
  if (images.length === 0) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    return;
  }

  function showImage(index) {
    carouselImage.src = images[index];
  }

  // Show the first image
  showImage(currentIndex);

  // Add carousel functionality only if multiple images
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