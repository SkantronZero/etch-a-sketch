let grid_size = [16, 16];
const grid = document.querySelector(".grid");
const grid_size_button = document.querySelector("#grid_size_button");

function updateGridSize(){
    grid_size = prompt('Enter a grid size. (ex. 16x16, max 100x100)');
    // console.log(grid_size);

    grid_size = grid_size.split('x');
    console.log(grid_size);
    console.log(grid_size[0]);
    console.log(typeof(grid_size));
    if(grid_size.length != 2){
        console.log('length != 0');
        return 'Error';
    }
    return grid_size;
}

console.log(grid);

grid_size_button.addEventListener("click", updateGridSize);
