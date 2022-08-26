let tiles = document.querySelectorAll(".tile");
// tiles[0].innerText = "Enemy";
document.querySelectorAll(".tile").forEach(occurence => {
    occurence.addEventListener('click', (e) => {
        // console.log("Tile was clicked");
        // console.log(this);
        // console.log(e.path);
        console.log(e.target);
        e.target.style.background = "black";
        // e.target.nextSibling.style.background = "red";
        console.log(e.target.nextSibling);

        let nextTile = tiles.indexOf(e.target);
        console.log(nextTile);
    });
});

// Game might use "Blast used." Player should try to defeat the enemies with the least amount of blasts.
let enemies = 3;
for(let i = 0; i < enemies; i++) {
    // Get a random tile
    let t = Math.floor(Math.random() * tiles.length);
    if(tiles[t].innerHTML !== "Enemy") tiles[t].innerHTML = "Enemy";
}
// add a way to see if there's an enemy there
tiles.forEach(occurence => {
    occurence.addEventListener('click', (e) => {
        if(e.target.innerHTML === "Enemy") alert("Found an enemy!");
        else alert("Nothing there.");
    })
})

// When player clicks on a tile:
    //  If there's nothing
    //      Add a "Blast"
    //      Add to Blast counter
    //  If there's an enemy or blast or blast effect
    //      Do nothing or (subtract from score or add to blast counter or both)


const setBlast = (e) => {
    console.log("Hello console!");
    console.log(this.document);
    // console.log(e.style.background); // shows up as an error/undefined
}

const blastCheck = () => {
    //  if tile has something on it
    //      remove that something
    //      add point to score
}


// document.getElementsByClassName("tile").getAttribute("onclick").alert("Test");

console.log(tiles);
console.log(tiles[0]);
// tiles[0].style.background = "black";




const countRows = () => {
    return document.getElementsByClassName("row").length;
}

const countTiles = () => {
    return document.getElementsByClassName("tile").length;
}

console.log(countRows());
console.log(countTiles());
