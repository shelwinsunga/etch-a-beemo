//Sets important constants and variables

const container = document.getElementById("grid-container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");



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

        
    };
};
//Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            //calculate enough pixels to change resolution without changing total size.
            var validRes = 800 / cellNum;
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
            newCell.style.minHeight= validRes + "px";
            newCell.style.minWidth= validRes + "px";
        };

    };
};

defaultGrid(36);

const allCells = document.querySelectorAll(".cell");

var mouseClicking = false;





function draw(){
    var pixelColor = document.getElementById("color-picker");
    var aColor = "white";
    

    allCells.forEach((cell) =>{
        cell.addEventListener("mousedown", (e)=>{
            mouseClicking = true;
            e.preventDefault();
        });

        cell.addEventListener("mouseup", ()=>{
            mouseClicking = false;
        });
        
        cell.addEventListener("mousemove", () =>{
            if(mouseClicking == true){
                cell.style.backgroundColor=aColor;

            }
        });

        pixelColor.addEventListener("input", () =>{
            aColor = pixelColor.value;
        });
    });

}

// draw();


function clearGrid(){
    const clearbtn = document.getElementById('clear');
    clearbtn.addEventListener('click', () => { 
        allCells.forEach((cell) =>{
            cell.style.backgroundColor="transparent";

        });


    });

}

function main(){
    draw();
    clearGrid();
}

main();