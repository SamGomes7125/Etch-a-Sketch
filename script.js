// script.js — dynamic grid generator with resize prompt

// Function that creates the grid
function createGrid(size) {
  const container = document.getElementById("grid-container");
  container.innerHTML = ""; // ✅ Clear previous grid completely

  const totalSquares = size * size;
  // ✅ Adjust size so the total grid stays the same width/height
  const squareSize = 600 / size; 

  for (let i = 0; i < totalSquares; i++) {
    const cell = document.createElement("div");
    cell.classList.add("square");

    // set square size dynamically
    cell.style.width = `${squareSize}px`;
    cell.style.height = `${squareSize}px`;

    // hover effect
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black";
    });

    container.appendChild(cell);
  }
}

// ✅ Create default 16x16 grid when page loads
document.addEventListener("DOMContentLoaded", () => {
  createGrid(16);
});

// ✅ Reset button prompt
document.getElementById("reset-btn").addEventListener("click", () => {
  let newSize = parseInt(prompt("Enter new grid size (1–100):"));

  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Invalid input. Please enter a number between 1 and 100.");
    return;
  }

  createGrid(newSize);
});
