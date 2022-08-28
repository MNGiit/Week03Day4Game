let score = 0;
let scoreDisplay = document.querySelector(".scoreContainer p"); // .scoreContainer is the class, p is the element tag

let blastRange = 1;
let blastCount = 0;
let blastCountDisplay = document.querySelector(".blastCountContainer p"); // .blastCountContainer is the class, p is the element tag


let enemies = 3;
let tiles = document.querySelectorAll(".tile");
// tiles[0].innerText = "Enemy";
document.querySelectorAll(".tile").forEach(occurence => {
    occurence.addEventListener('click', (e) => {
        // console.log("Tile was clicked");
        // console.log(this);
        // console.log(e.path);
        // console.log(e.target); // .target is important

        // add a way to see if there's an enemy there
        // checkTile(e);

        if(e.target.innerHTML !== "Enemy") {
            e.target.style.background = "black";
            addBlastCount();
            updateBlastCountDisplay();
            // call method that will start blast effect
            // setTimeout(function, milliseconds)
            // console.time();
            // console.log("Time started");
            // setTimeout(activateBlast(), 100000);
            // console.timeEnd();
            // console.log("Time ended");
            // setBlast(); // this is already in onclick!
        }
        // e.target.style.background = "black";
        
        // score++;
        // updateScoreDisplay();
        
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

// tiles.forEach(occurence => {
//     occurence.addEventListener('click', checkTile(e));
// })

// When player clicks on a tile:
    //  If there's nothing
    //      Add a "Blast"
    //      Add to Blast counter
    //  If there's an enemy or blast or blast effect
    //      Do nothing or (subtract from score or add to blast counter or both)
const setBlast = () => {
    // console.log("Hello console! This is", this);
    
    // console.log(event.currentTarget);
    // console.log("Tiles:", tiles);
    
    // console.log("Tile index is:", tiles.indexOf(event.currentTarget)); // doesn't work
    // console.log("Tile index is:", tiles.findIndex(event.currentTarget)); // also doesn't work
    
    console.log("Target:", event.target);
    console.log("This is:", this);
    console.log("This event is:", this.event);
    console.log("This Event is:", this.Event);
    // console.log("This PointerEvent is:", this.Event.PointerEvent);    // doesn't work, PointerEvent is not defined
    // console.log(Target); // doesn't work, Target is not defined
    // console.log(target); // doesn't work, target is not defined


    // console.log(e.style.background); // shows up as an error/undefined
    // console.time();
    // setTimeout(activateBlast(), 5000); // doesn't work, it would immediately call method
    // activateBlast();
    // this way works
    /*
    setTimeout(function() {
        // console.log("Hello blast!");
        activateBlast();
    }, 5000);
    */
    activateBlast();
    // console.timeEnd();
}

const activateBlast = () => {
    // console.time();
    setTimeout(function() {
        console.log("Hello blast!");
        // console.timeEnd();
    }, 2500)
    // console.timeEnd(); // doesn't work as intended, call it it inside setTimeout()
}

const blastCheck = () => {
    //  if tile has something on it
    //      remove that something
    //      add point to score
    console.log("Blast check");
}

// document.getElementsByClassName("tile").getAttribute("onclick").alert("Test");

// console.log(tiles);
// console.log(tiles[0]);
// tiles[0].style.background = "black";

const updateScoreDisplay = () => {
    scoreDisplay.innerHTML = score;
}

const updateBlastCountDisplay = () => {
    blastCountDisplay.innerHTML = blastCount;
}

const addBlastCount = () => {
    blastCount++;
}

const countRows = () => {
    return document.getElementsByClassName("row").length;
}

const countTiles = () => {
    return document.getElementsByClassName("tile").length;
}