let grid_size = [16, 16]; //default values
let selected_color = 'black';
const grid_container = document.querySelector(".grid_container");
const grid = document.querySelector(".grid");
const grid_size_button = document.querySelector("#grid_size_button");
const clear_grid_button = document.querySelector("#clear_grid_button");
const shape_toggle_button = document.querySelector("#shape_toggle_button");
const color_select_button = document.querySelector("#color_select_button");


function pixel_size_calc(width , height){
    let pixel_width = 600/width;
    let pixel_height = 600/height;
    return [pixel_width, pixel_height];
}

function pick_color_prompt(){
    new_color = prompt('Enter a CSS color');
    selected_color = new_color;
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
    if (grid_size[0] > 100 || grid_size[1] > 100){
        grid_size = prompt(`Error \n Grid size cannot be great than 100x100.\nEnter a grid size \n(ex. 16x16, max 100x100)\n(must be square)`);
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
    let grid_elementsx = document.querySelectorAll('.cellx');
    let grid_arrayx = [...grid_elementsx];

    grid_arrayx.forEach((element)=>{
        if(element.style.borderRadius == '50%'){
            element.style.borderRadius = '';
        }
        else{
        element.style.borderRadius = '50%';
        }
    });
    let grid_elementsy = document.querySelectorAll('.celly');
    let grid_arrayy = [...grid_elementsy];

    grid_arrayy.forEach((element)=>{
        if(element.style.borderRadius == '50%'){
            element.style.borderRadius = '';
        }
        else{
        element.style.borderRadius = '50%';
        }
    });
}


function updateGridSize(){
    grid_size = prompt_grid_size();

    pixel_size = pixel_size_calc(grid_size[0], grid_size[1]);

    console.log(pixel_size);

    clear_grid();

    reset_grid();

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
            cellx.addEventListener('mouseenter', () => {cellx.style.background = selected_color});
            // cellx.addEventListener('dragstart', () => {cellx.style.background = 'black'});
            celly.append(cellx);
        }
        grid.append(celly);

    }

    let color_grid = document.querySelectorAll('.cellx');

    console.log(color_grid);
    
    console.log(pixel_size[0]);
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

function reset_grid(){
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

function clear_grid(){
    let grid_elementsx = document.querySelectorAll('.cellx');
    let grid_arrayx = [...grid_elementsx];

    grid_arrayx.forEach((element)=>{
        element.style.backgroundColor = '';
    });
    let grid_elementsy = document.querySelectorAll('.celly');
    let grid_arrayy = [...grid_elementsy];

    grid_arrayy.forEach((element)=>{
        element.style.backgroundColor = '';
    });
}

grid_size_button.addEventListener("click", updateGridSize);

clear_grid_button.addEventListener("click", clear_grid);

shape_toggle_button.addEventListener("click", change_shape);

color_select_button.addEventListener("click", pick_color_prompt);