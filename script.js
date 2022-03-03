const parent = document.querySelector('.container');

const gridDiv = [];
for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){
        gridDiv[i,j] = document.createElement('div');
        gridDiv[i,j].classList.add('grid-square');
        parent.appendChild(gridDiv[i,j]);
    }
}