let timeout = 70;
function callStackLoop(children, index) {
    setTimeout(() => {
        let childToAffect = children[index];
        let rowCount = parseInt(children.length / columnCount);
        index += 1;

        childToAffect.classList.remove("hiddenCard");
        childToAffect.classList.add("transitionCard");

        // Defines the recursive case
        if (index < children.length) {
            callStackLoop(children, index);
        }

        // Only adds delay after each row
        if (index % rowCount && index > rowCount) {
            timeout = 50;
        } else {
            timeout = 0;
        }
    }, timeout);
}
let children = document.querySelectorAll(".hiddenCard");
callStackLoop(children, 0);
