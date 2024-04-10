let grid_size = [16, 16];
const grid_container = document.querySelector(".grid_container");
const grid = document.querySelector(".grid");
const grid_size_button = document.querySelector("#grid_size_button");
const grid_text = document.createElement("div");
grid_text.classList.add('cell');
const clear_grid_button = document.querySelector("#clear_grid_button");
const shape_toggle_button = document.querySelector("#shape_toggle_button");


function pixel_size_calc(width , height){
    let pixel_width = 600/width;
    let pixel_height = 600/height;
    return [pixel_width, pixel_height];
}

function prompt_grid_size(){
    

    let grid_valid = 0;
    grid_size = prompt('Enter a grid size \n(ex. 16x16, max 100x100)\n(must be square)');
    console.log(grid_size);

    while(grid_valid == 0){
    grid_size = grid_size.split('x');
    let x = grid_size[0];
    let y = grid_size[1];

    console.log(typeof(grid_size));
    
    if(grid_size == null){
        console.log('Invalid grid size');
        grid_size = prompt(`Error: Grid size cannot be Null.\nEnter a grid size \n(ex. 16x16, max 100x100)\n(must be square)`);
    }
    
    if(grid_size.length != 2){
        console.log('Invalid grid size');
        grid_size = prompt(`Error \n ${grid_size[0]}x${grid_size[1]} was not valid.\nEnter a grid size \n(ex. 16x16, max 100x100)\n(must be square)`);

    }
    else if(grid_size[0] != grid_size[1]){
        grid_size = prompt(`Error \n ${grid_size[0]}x${grid_size[1]} was not square.\nEnter a grid size \n(ex. 16x16, max 100x100)\n(must be square)`);
    }
    else{
        grid_valid = 1;
    }
}
    return grid_size;
}

function change_shape(){
    let cellx = document.querySelectorAll('.cellx');
    cellx.style.borderRadius = '50%';
    // cellx.forEach(element, ()=>{
    //     element.style.borderRadius = '50%';
    // })
}

function updateGridSize(){
    grid_size = prompt_grid_size();

    pixel_size = pixel_size_calc(grid_size[0], grid_size[1]);

    console.log(pixel_size);

    clear_grid();

    for(let j = 0; j<grid_size[1]; j++){

        let celly = document.createElement('div');
        celly.classList.add('celly');
        celly.style.width = `${pixel_size[0]}px`;
        celly.style.height = `${pixel_size[1]}px`;


        for (let i = 0; i<grid_size[0]; i++){
            let cellx = document.createElement('div');
            cellx.classList.add('cellx');
            cellx.style.width = `${pixel_size[0]}px`;
            cellx.style.height = `${pixel_size[1]}px`;
            cellx.style.draggable = 'false';
            // cellx.addEventListener('mouseenter', event_log);
            cellx.addEventListener('mouseenter', () => {cellx.style.background = 'black'});
            // cellx.addEventListener('dragstart', () => {cellx.style.background = 'black'});
            celly.append(cellx);
        }
        grid.append(celly);

    }

    let color_grid = document.querySelectorAll('.cellx');

    console.log(color_grid);
    
    console.log(pixel_size[0]);

    return grid_size;
}

function color_cell(event){
    event.target.style.background='solid black';
    event.target.style.color='solid black';
    event.target.style.backgroundColor='solid black';
}

function event_log(event){
    let element = event.target;
    let message = document.querySelector('#logged_event');
    message.textContent = event.target.style.backgroundColor;
}
// event_log('New Message');

function clear_grid(){
    let grid_elementsx = document.querySelectorAll('.cellx');
    let grid_arrayx = [...grid_elementsx];

    grid_arrayx.forEach((element)=>{
        element.remove();
    });
    let grid_elementsy = document.querySelectorAll('.celly');
    let grid_arrayy = [...grid_elementsy];

    grid_arrayy.forEach((element)=>{
        element.remove();
    });
}

// console.log(grid);

grid_size_button.addEventListener("click", updateGridSize);

clear_grid_button.addEventListener("click", clear_grid);

shape_toggle_button.addEventListener("click", change_shape);
