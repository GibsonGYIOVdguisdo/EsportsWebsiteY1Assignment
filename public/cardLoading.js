let timeout = 70;
function callStackLoop(children, index){
    setTimeout(() => {
        let childToAffect = children[index];
        childToAffect.classList.remove("hiddenCard");
        childToAffect.classList.add("transitionCard");
        index += 1;
        if (index < children.length){
            callStackLoop(children, index);
        }
        let rowCount = parseInt(children.length / columnCount)
        if (index % rowCount && index > rowCount){
            console.log("aa",index % rowCount);
            timeout = 50;
        } else{
            timeout = 0
        }
    }, timeout)
}
let gridContainer = document.getElementById("gridContainer");
let children = document.querySelectorAll(".hiddenCard");
callStackLoop(children, 0);