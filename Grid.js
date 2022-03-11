const Grid_size =4;
const Cell_size =20;
const Cell_gap =2;


export default class Grid{
    #cells

    constructor(gridElement){
        gridElement.style.setProperty("--grid-size",Grid_size);
        gridElement.style.setProperty("--cell-size",`${Cell_size}vmin`);
        gridElement.style.setProperty("--cell-gap",`${Cell_gap}vmin`);

        this.#cells = createCellElement(gridElement).map((cellElement, index) =>{
            return new Cell (cellElement,index%Grid_size ,Math.floor(index/Grid_size));
        });
    }

    get #emptyCells(){
        return this.#cells.filter(cell => cell.tile == null)
    }

    randomEmptyCell(){
        const randomIndex = Math.floor(Math.random() * this.#emptyCells.length)
        console.log(randomIndex);
        return this.#emptyCells[randomIndex]
    }
}

class Cell {
    #cellElement
    #x
    #y
    #tile
    
    constructor(cellElement, x, y){
        this.#cellElement = cellElement;
        this.#x = x;
        this.#y = y;
    }

    get tile(){
        return this.#tile
    }

    set tile(value){
        this.#tile = value;
        if(value == null) return
        this.#tile.x = this.#x;
        this.#tile.y = this.#y;
    }
}


function createCellElement(gridElement){
    const cells =[]
    for (let i=0; i<Grid_size * Grid_size; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cells.push(cell);
        gridElement.append(cell);
    }
    return cells
}