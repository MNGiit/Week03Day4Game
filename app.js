let score = 0;
let scoreDisplay = document.querySelector(".scoreContainer p"); // .scoreContainer is the class, p is the element tag

let blastRange = 1;
let blastCount = 0;
let blastCountDisplay = document.querySelector(".blastCountContainer p"); // .blastCountContainer is the class, p is the element tag


let enemies = 3;
let tiles = document.querySelectorAll(".tile");

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
        if(tiles[t].innerHTML !== "Enemy") tiles[t].innerHTML = "Enemy";
    }
}

const setBarriers = () => {
    console.log("setBarriers() should put a barrier on the tile");
}

setEnemies();

const checkTile = (e) => {
    if(e.target.innerHTML === "Enemy") alert("Found an enemy!");
    else alert("Nothing on this tile.");
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

    setTimeout(function(t = tileClickedOn) { // console.log("Inside setTimeout", x) // WORKS
        t.style.background = "orange";
    }, 2500)
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
document.getElementsByClassName("tile").getAttribute("onclick").alert("Test");
    console.log(event.currentTarget); // inside setBlast()
    console.log("Target:", event.target); // inside setBlast()
    console.log("This is:", this); // inside setBlast()
    console.log("This event is:", this.event); // inside setBlast()
    console.log("This Event is:", this.Event); // inside setBlast()
*/