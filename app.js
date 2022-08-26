const countRows = () => {
    return document.getElementsByClassName("row").length;
}

const countTiles = () => {
    return document.getElementsByClassName("tile").length;
}

console.log(countRows());
console.log(countTiles());

const setBlast = () => {
    //  Start blast on origin/click
    //  for i = 1; i < blastRange; i++
    //      if tile is next to it on the right, start blast
    //      if tile is next to it on the left, start blast
    //      if tile is above it, start blast
    //      if tile is below it, start blast
}

const blastCheck = () => {
    //  if tile has something on it
    //      remove that something
    //      add point to score
}


// document.getElementsByClassName("tile").getAttribute("onclick").alert("Test");

let tiles = document.querySelectorAll(".tile");
console.log(tiles);
console.log(tiles[0]);
// tiles[0].style.background = "black";
tiles[0].innerText = "Enemy";

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
