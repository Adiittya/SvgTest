const dropdown = document.getElementById("rectangles");
const rectangles = document.querySelectorAll("rect");

dropdown.addEventListener("change", (event) => {
  const selectedRect = event.target.value;

  // Remove the zoom effect from all rectangles
  rectangles.forEach((rect) => rect.classList.remove("zoomed"));

  // Add the zoom effect to the selected rectangle
  const rectToZoom = document.getElementById(selectedRect);
  rectToZoom.classList.add("zoomed");
});
