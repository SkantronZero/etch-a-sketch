let grid_size = [16, 16];
const grid = document.querySelector(".grid");
const grid_size_button = document.querySelector("#grid_size_button");
const grid_text = document.querySelector('#grid_text');


// // let cell0 = 10;
// let cell0 = document.createElement(`cell${0}`);
// let i = 5;

// eval('let cell' + i + ' = ' + 'document.createElement(`cell${i}`)');

// // (`cell${0}`)
// console.log(cell5);

function fillMatrix(gridArr, x, y){
    for(let i = 0; i<x; i++){
        gridArr[i] = [];
        for(let j = 0; j<y; j++){
            gridArr[i][j] = undefined;
        }
    }
    // console.log(gridArr);
    return gridArr;
}

function gridCalc(width , height){
    let gridWidth = grid.offsetHeight;
    let gridHeight = grid.offsetWidth;
    
    let pixelWidth = (gridWidth / width);
    let pixelHeight = (gridHeight / height);

    let gridCalcArr = [pixelWidth, pixelHeight];

    return gridCalcArr;
}


function updateGridSize(){
    // grid_size = prompt('Enter a grid size. (ex. 16x16, max 100x100)');
    // // console.log(grid_size);

    // grid_size = grid_size.split('x');
    // let x = grid_size[0];
    // let y = grid_size[1];
    // // console.log(typeof(grid_size));
    // if(grid_size.length != 2){
    //     console.log('Invalid grid size');
    //     return 'Error';
    // }
    let x = 8;
    let y = 4;
    grid.removeChild(grid_text);
    // console.log(x);
    let gridSize = gridCalc(x, y);

    // console.log(gridSize);

    let gridArr = [];
    
    gridArr = fillMatrix(gridArr, x, y);

    for(let j = 0; j<y; j++){
        for (let i = 0; i<x; i++){
            let cell = document.createElement(`div`);
            cell.style.display.flex = `${(1/16)}%`;
            cell.style.height = '10px';
            grid.append(cell);
        }
    }

    // gridArr.forEach((a) => {
    //     console.log(a[0]);
    //     let cell = document.createElement(`div`);
    //     // cell.style.width = `${gridSize[0]}px`;
    //     // cell.style.height = `${gridSize[1]}px`;
    //     grid.append(cell);
    // }
    // );

    // for(let i = 0; i < x ; i++){
    //     // let cell0 = document.createElement('cell0');
    //     console.log(eval('let cell' + i + ' = ' + 'document.createElement(\'cell' + i + '\');'));
    //     // eval('console.log(cell'+i+');');
    //     // console.log(cell0);
    //     // console.log(i);
    // }
    return grid_size;
}

// console.log(grid);

grid_size_button.addEventListener("click", updateGridSize);
