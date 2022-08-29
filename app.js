let score = 0;
let scoreDisplay = document.querySelector(".scoreContainer p"); // .scoreContainer is the class, p is the element tag

let blastRange = 1;
let blastCount = 0;
let blastCountDisplay = document.querySelector(".blastCountContainer p"); // .blastCountContainer is the class, p is the element tag

let barriers = 20;
let enemies = 3;
let tiles = document.querySelectorAll(".tile");
let rows = document.querySelectorAll(".row");

document.querySelectorAll(".tile").forEach(occurence => {
    occurence.addEventListener('click', (e) => {
        // console.log(e.target); // .target is important
 
        // checkTile(e); // add a way to see if there's an enemy there

        if(e.target.innerHTML !== "Enemy") {
            e.target.style.background = "black";
            addBlastCount();
            updateBlastCountDisplay();
        }

        // e.target.nextSibling.style.background = "red";
        // console.log("Next sibling", e.target.nextSibling);

        // let nextTile = tiles.indexOf(e.target); // error?
        // console.log(nextTile);
    });
});

// Game might use "Blast used." Player should try to defeat the enemies with the least amount of blasts.

const setEnemies = () => {
    for(let i = 0; i < enemies; i++) {
        let t = Math.floor(Math.random() * tiles.length);
        if(tiles[t].innerHTML !== "Enemy" && tiles[t].innerHTML !== "Barrier") tiles[t].innerHTML = "Enemy";
    }
}

const setBarriers = () => {
    // console.log("setBarriers() should put a barrier on the tile");
    for(let i = 0; i < barriers; i++) {
        let t = Math.floor(Math.random() * tiles.length);
        if(tiles[t].innerHTML !== "Enemy" || tiles[t].innerHTML !== "Barrier") tiles[t].innerHTML = "Barrier";
    }
}

setBarriers();
setEnemies();

const checkTile = (e) => {
    if(e.target.innerHTML === "Enemy") alert("Found an enemy!");
    else alert("Nothing on this tile.");
}

const checkTileForEnemy = (t) => {
    if(t.innerHTML === "Enemy") score++;
}

// When player clicks on a tile:
    //  If there's nothing
    //      Add a "Blast"
    //      Add to Blast counter
    //  If there's an enemy or blast or blast effect
    //      Do nothing or (subtract from score or add to blast counter or both)
const setBlast = () => {
    // activateBlast();
    // this way works
    /*
    setTimeout(function() {
        // console.log("Hello blast!");
        activateBlast();
    }, 5000);
    */
   if(this.event.target.innerHTML !== "Enemy") activateBlast();
    // console.timeEnd();
}

const activateBlast = () => {
    // console.log("target === tiles[49]?", this.event.target === tiles[49])
    // console.log("target === tiles[79]?", this.event.target === tiles[79])
    let tileClickedOn = this.event.target;
    // console.log(tiles.indexOf(tileClickedOn));
    // console.log(tiles.find(tileClickedOn));
    let tileIndex;
    let i = 0;
    while(!tileIndex) {
        if(tiles[i] === tileClickedOn) {tileIndex = i;}
        i++;
        if(i>tiles.length) {tileIndex = "Error: Not found"};
    }

    // console.log("tiles.length/tiles in row:", (tileIndex+1)/8);
    // console.log("Tiles.index/Tiles in row using Math.floor", Math.floor((tileIndex+1)/8));
    
    setTimeout(function(t = tileClickedOn) { // console.log("Inside setTimeout", x) // WORKS
        t.style.background = "orange"; // Origin
        
        let tilesPerRow = tiles.length/countRows();

        // up
        for(let i =1 ; i <= blastRange; i++) {
            let newTileIndex = tileIndex - tilesPerRow;
            if(newTileIndex > 0) {
                tiles[newTileIndex].style.background = "orange";
                checkTileForEnemy(tiles[newTileIndex]);
                console.log(score);
            }
        }

        // down
        for(let i =1 ; i <= blastRange; i++) {
            let newTileIndex = tileIndex + tilesPerRow;
            if(newTileIndex < tiles.length) {
                tiles[newTileIndex].style.background = "orange";
                checkTileForEnemy(tiles[newTileIndex]);
                console.log(score);
            }
        }

        // right
        for(let i = 1; i <= blastRange; i++) {
            let newTileIndex = tileIndex + i;
            if(tiles[newTileIndex].parentNode === tiles[tileIndex].parentNode) {
                tiles[newTileIndex].style.background = "orange";
                checkTileForEnemy(tiles[newTileIndex]);
                console.log(score);
            }
        }

        // left
        for(let i = 1; i <= blastRange; i++) {
            let newTileIndex = tileIndex - i;
            if(tiles[newTileIndex].parentNode === tiles[tileIndex].parentNode) {
                tiles[newTileIndex].style.background = "orange";
                checkTileForEnemy(tiles[newTileIndex]);
                console.log(score);
            }
        }
    }, 50)
    // console.timeEnd(); // doesn't work as intended, call it it inside setTimeout()
}

const blastCheck = () => {
    //  if tile has something on it
    //      remove that something
    //      add point to score
    console.log("Blast check");
}

const updateScoreDisplay = () => {scoreDisplay.innerHTML = score;}
const updateBlastCountDisplay = () => {blastCountDisplay.innerHTML = blastCount;}
const addBlastCount = () => {blastCount++;}

const countRows = () => {return document.getElementsByClassName("row").length;}
const countTiles = () => {return document.getElementsByClassName("tile").length;}

/*
tiles[0].style.background = "black"; // one way to change the style of something in an array
console.log(tiles[0].parentNode); // it's possible to get parentNode like this
document.getElementsByClassName("tile").getAttribute("onclick").alert("Test");
    console.log(event.currentTarget); // inside setBlast()
    console.log("Target:", event.target); // inside setBlast()
    console.log("This is:", this); // inside setBlast()
    console.log("This event is:", this.event); // inside setBlast()
    console.log("This Event is:", this.Event); // inside setBlast()
*/