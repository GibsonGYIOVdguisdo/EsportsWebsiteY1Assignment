let cardWidth = 450;
let columnCount = 1;
function resizeCards() {
    columnCount = Math.floor(document.documentElement.clientWidth / cardWidth);
    let temp = "";
    for (let i = 0; i < columnCount; i++) {
        temp += "auto ";
    }
    let newStyle = "grid-template-columns: " + temp;
    document.getElementById("gridContainer").style = newStyle;
}
resizeCards();
document.body.onresize = resizeCards;
