// Loader animation functions.
function loadNow(opacity) {
  if (opacity <= 0) {
    displayContent();
  } else {
    const loader = document.getElementById("loader");
    loader.style.opacity = opacity;
    window.setTimeout(function () {
      loadNow(opacity - 0.035);
    }, 100);
  }
}

function displayContent() {
  // Hide the loader.
  const loader = document.getElementById("loader");
  loader.style.display = "none";
  // Fade in the main content.
  const content = document.getElementById('content');
  content.style.opacity = "1";
}

document.addEventListener("DOMContentLoaded", function () {
  // Start the loader animation.
  loadNow(1);
});
