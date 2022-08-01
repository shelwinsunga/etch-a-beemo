//Sets important constants and variables

const container = document.getElementById("grid-container");
let rows = document.getElementsByClassName("gridRow");
let size = 16;

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
      var validResVert = 500 / cellNum;
      var validResHoriz = 870 / cellNum;
      let newCell = document.createElement("div");

      rows[j].appendChild(newCell).className = "cell";
      newCell.id = i + " " + j;
      newCell.style.minHeight = validResVert + "px";
      newCell.style.minWidth = validResHoriz + "px";
    }
  }
}

//Destroys Grid for Repurposing
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

// const allCells = document.querySelectorAll(".cell");

let mouseClicking = false;
function setMode() {}

function draw() {
  const allCells = document.querySelectorAll(".cell");
  var pixelColor = document.getElementById("color-picker");
  const eraserbtn = document.getElementById("Eraser");
  const drawbtn = document.getElementById("draw-button");
  const rainbowbtn = document.getElementById("rainbow");
  let rainbowMode = false;
  let prevColor = "#002222";
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
        if (rainbowMode) {
          const R = Math.floor(Math.random() * 256);
          const G = Math.floor(Math.random() * 256);
          const B = Math.floor(Math.random() * 256);
          cell.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
        } else {
          cell.style.backgroundColor = aColor;
        }
      }
    });

    cell.addEventListener("click", () => {
      cell.style.backgroundColor = aColor;
    });

    pixelColor.addEventListener("input", () => {
      rainbowMode = false;
      aColor = pixelColor.value;
    });
  });
  eraserbtn.addEventListener("click", () => {
    rainbowMode = false;
    prevColor = aColor;
    aColor = "#c5e5d6";
  });
  drawbtn.addEventListener("click", () => {
    rainbowMode = false;
    aColor = prevColor;
  });

  rainbowbtn.addEventListener("click", () => {
    if (!rainbowMode) {
      rainbowMode = true;
    } else {
      rainbowMode = false;
    }
  });
}

function clearGrid() {
  // const allCells = document.querySelectorAll(".cell");
  const clearbtn = document.getElementById("clear");
  clearbtn.addEventListener("click", () => {
    destroyGrid();
    defaultGrid(size);
    draw();
  });
}

// var state = [];


function loadBeemoFace() {
  const allCells = document.querySelectorAll(".cell");
  allCells.forEach((cell) => {
    if (
      cell.id == "2 4" ||
      cell.id == "5 4" ||
      cell.id == "10 4" ||
      cell.id == "13 4" ||
      cell.id == "3 5" ||
      cell.id == "4 5" ||
      cell.id == "11 5" ||
      cell.id == "12 5" ||
      cell.id == "5 12" ||
      cell.id == "10 12" ||
      cell.id == "6 13" ||
      cell.id == "7 13" ||
      cell.id == "8 13" ||
      cell.id == "9 13"
    ) {
      cell.style.backgroundColor = "#002222";
    }
  });
}
function main() {
  changeResolution();
  draw();
  loadBeemoFace();
  clearGrid();

}

main();
