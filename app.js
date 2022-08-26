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
}

// document.getElementsByClassName("tile").getAttribute("onclick").alert("Test");