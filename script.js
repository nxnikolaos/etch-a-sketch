const parent = document.querySelector('.container');
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


reset.addEventListener("click",function(){  
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square=>{
        square.style.backgroundColor = 'white';
    })    
})

parent.appendChild(reset);

