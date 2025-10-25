// script.js — create a 16x16 grid dynamically

// configuration
const GRID_SIZE = 16; // 16 x 16
const TOTAL_SQUARES = GRID_SIZE * GRID_SIZE;

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("grid-container");
  if (!container) {
    console.error("Grid container not found. Check index.html for 
#grid-container.");
    return;
  }

  console.log("Creating grid:", GRID_SIZE, "x", GRID_SIZE);

  // create squares
  for (let i = 0; i < TOTAL_SQUARES; i++) {
    const cell = document.createElement("div");
    cell.classList.add("square");
    cell.dataset.index = i;
    container.appendChild(cell);
  }

  console.log("Created", container.children.length, "squares.");
});

