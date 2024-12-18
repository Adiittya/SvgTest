// Load the external SVG file
const svgContainer = document.getElementById("svgContainer");
fetch("floor.svg")
  .then((response) => response.text())
  .then((svgContent) => {
    svgContainer.innerHTML = svgContent;

    // Add dropdown functionality after the SVG is loaded
    const dropdown = document.getElementById("rectangles");
    const rectangles = svgContainer.querySelectorAll("rect");

    dropdown.addEventListener("change", (event) => {
      const selectedRect = event.target.value;

      // Remove the zoom effect from all rectangles
      rectangles.forEach((rect) => rect.classList.remove("zoomed"));

      // Add the zoom effect to the selected rectangle
      const rectToZoom = svgContainer.querySelector(`#${selectedRect}`);
      rectToZoom.classList.add("zoomed");
    });
  })
  .catch((error) => console.error("Error loading SVG:", error));
