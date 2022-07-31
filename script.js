// import * as fs from "fs";

//Sets important constants and variables

const container = document.getElementById("grid-container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
var size = 16;

//Creates a default grid sized 16x16
function defaultGrid(size) {
  makeRows(size);
  makeColumns(size);
}

//Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {
  //Creates rows
  for (r = 0; r < rowNum; r++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";
  }
}
//Creates columns
function makeColumns(cellNum) {
  for (i = 0; i < rows.length; i++) {
    for (j = 0; j < cellNum; j++) {
      //calculate enough pixels to change resolution without changing total size.
      var validRes = 800 / cellNum;
      let newCell = document.createElement("div");

      rows[j].appendChild(newCell).className = "cell";
      newCell.id = i + " " + j;
      newCell.style.minHeight = validRes + "px";
      newCell.style.minWidth = validRes + "px";
    }
  }
}

function destroyGrid() {
  container.innerHTML = "";
}

function changeResolution() {
  const btn16 = document.getElementById("16px");
  const btn32 = document.getElementById("32px");
  const btn64 = document.getElementById("64px");

  btn16.addEventListener("click", () => {
    destroyGrid();
    size = 16;
    defaultGrid(size);
    draw();
  });

  btn32.addEventListener("click", () => {
    destroyGrid();
    size = 32;
    defaultGrid(size);
    draw();
  });

  btn64.addEventListener("click", () => {
    destroyGrid();
    size = 64;
    defaultGrid(size);
    draw();
  });
}

defaultGrid(size);

const allCells = document.querySelectorAll(".cell");

var mouseClicking = false;

function draw() {
  const allCells = document.querySelectorAll(".cell");
  var pixelColor = document.getElementById("color-picker");
  const eraserbtn = document.getElementById("Eraser");
  var aColor = "#002222";

  allCells.forEach((cell) => {
    cell.addEventListener("mousedown", (e) => {
      mouseClicking = true;
      e.preventDefault();
    });

    cell.addEventListener("mouseup", () => {
      mouseClicking = false;
    });

    cell.addEventListener("mousemove", () => {
      if (mouseClicking == true) {
        cell.style.backgroundColor = aColor;
      }
    });

    cell.addEventListener("click", () => {
      cell.style.backgroundColor = aColor;
    });

    pixelColor.addEventListener("input", () => {
      aColor = pixelColor.value;
    });
  });
  eraserbtn.addEventListener("click", () => {
    aColor = "#c5e5d6";
  });
}

// draw();

function clearGrid() {
  const allCells = document.querySelectorAll(".cell");
  const clearbtn = document.getElementById("clear");
  clearbtn.addEventListener("click", () => {
    destroyGrid();
    defaultGrid(size);
    draw();
  });
}

// var state = [];

// function saveState() {
//   var cellInfo = [];
//   const savebtn = document.getElementById("save");
//   savebtn.addEventListener("click", () => {
//     state = [];
//     allCells.forEach((cell) => {
//       cellInfo = [cell.id, window.getComputedStyle(cell).backgroundColor];
//       state.push(cellInfo);
//     });
    
//     for(let i = 0; i < state.length * 2; i++){
//         console.log(state[i][0] + " " + state[i][1]);
//     }


//   });
// }

function main() {
  changeResolution();
  draw();
  clearGrid();
  saveState();
}

main();




