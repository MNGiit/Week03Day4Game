const countRows = () => {
    return document.getElementsByClassName("row").length;
}

const countTiles = () => {
    return document.getElementsByClassName("tile").length;
}

console.log(countRows());
console.log(countTiles());

const setBlast = () => {
    alert("You clicked a tile!");
    // console.log(this);
}

document.querySelectorAll(".tile").forEach(occurence => {
    occurence.addEventListener('click', (e) => {
        console.log("Tile was clicked");
        console.log(this);
        console.log(e.path);
        console.log(e.target);
    });
});

// document.getElementsByClassName("tile").getAttribute("onclick").alert("Test");