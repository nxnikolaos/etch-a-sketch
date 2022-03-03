const parent = document.querySelector('.container');
const ui = document.createElement('div');
ui.classList.add('ui');
parent.appendChild(ui);

const reset = document.createElement('button');
reset.textContent = `Reset!`;

const gridDiv = [];
for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){
        gridDiv[i,j] = document.createElement('div');
        gridDiv[i,j].classList.add('grid-square');
        gridDiv[i,j].addEventListener("mouseenter",function(){
            this.style.backgroundColor = '#e900ff';
        })
        parent.appendChild(gridDiv[i,j]);
    }
}

let gridDimension = 0;
reset.addEventListener("click",function(){  
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square=>{
        square.remove();
    })    
    gridDimension = Number(window.prompt("Insert a dimension for the new grid"));
    while(gridDimension>100){
        gridDimension = Number(window.prompt("Insert a dimension below 100"));    
    }
})

ui.appendChild(reset);

/* Mistake but good to have for future references
reset.addEventListener("click",function(){  
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square=>{
        square.style.backgroundColor = 'white';
    })    
    gridDimension = Number(window.prompt("Insert a dimension for the new grid"));
})*/