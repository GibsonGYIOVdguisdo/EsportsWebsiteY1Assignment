let currentFilterParams = ["asc", "id"];
let currentOrder = localStorage.getItem("order") || "asc";
let currentSort = localStorage.getItem("sortBy") || "id";

let idSelect = document.getElementById("idDropButton");
let nameSelect = document.getElementById("nameDropButton");
let sizeSelect = document.getElementById("sizeDropButton");
let durationSelect = document.getElementById("durationDropButton");

let ascSelect = document.getElementById("ascDropButton");
let descSelect = document.getElementById("descDropButton");

let confirmButton = document.getElementById("confirmDropButton");

if (currentOrder === "asc"){
    ascSelect.classList.add("activeDrop");
    currentFilterParams[0] = "asc";
} else{
    descSelect.classList.add("activeDrop");
    currentFilterParams[0] = "desc";
}

if (currentSort === "name"){
    nameSelect.classList.add("activeDrop");
    currentFilterParams[1] = "name";
} else if (currentSort === "duration") {
    durationSelect.classList.add("activeDrop");
    currentFilterParams[1] = "duration";
} else if (currentSort === "team_size") {
    sizeSelect.classList.add("activeDrop");
    currentFilterParams[1] = "team_size";
} else{
    idSelect.classList.add("activeDrop");
    currentFilterParams[1] = "id";
}

function makeOthersInactive(){
    idSelect.classList.remove("activeDrop")
    nameSelect.classList.remove("activeDrop")
    sizeSelect.classList.remove("activeDrop")
    durationSelect.classList.remove("activeDrop")
}

ascSelect.onclick = () => {
    ascSelect.classList.add("activeDrop");
    descSelect.classList.remove("activeDrop");
    currentFilterParams[0] = "asc";
}

descSelect.onclick = () => {
    descSelect.classList.add("activeDrop");
    ascSelect.classList.remove("activeDrop");
    currentFilterParams[0] = "desc";
}

nameSelect.onclick = () => {
    makeOthersInactive();
    nameSelect.classList.add("activeDrop");
    currentFilterParams[1] = "name";
}

idSelect.onclick = () => {
    makeOthersInactive();
    idSelect.classList.add("activeDrop");
    currentFilterParams[1] = "id";
}

durationSelect.onclick = () => {
    makeOthersInactive();
    durationSelect.classList.add("activeDrop");
    currentFilterParams[1] = "duration";
}

sizeSelect.onclick = () => {
    makeOthersInactive();
    sizeSelect.classList.add("activeDrop");
    currentFilterParams[1] = "team_size";
}

confirmButton.onclick = () => {
    localStorage.setItem("order", currentFilterParams[0]);
    localStorage.setItem("sortBy", currentFilterParams[1]);
    window.location.href = `/games/?order=${currentFilterParams[0]}&sortBy=${currentFilterParams[1]}`
}

const querySortCheck = new URLSearchParams(window.location.search);
let newQuery = `${window.location.href}?`;
if (querySortCheck.get("order") !== currentFilterParams[0] || querySortCheck.get("sortBy") !== currentFilterParams[1]){
    newQuery += `order=${currentFilterParams[0]}&sortBy=${currentFilterParams[1]}`;
    if (querySortCheck.get("messageToShow")){
        newQuery += `&messageToShow=${querySortCheck.get("messageToShow")}`;
    }
    window.location.href = newQuery;
}