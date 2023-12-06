let currentFilterParams = ["asc", "id"];
let currentOrder = localStorage.getItem("order") || "asc";
let currentSort = localStorage.getItem("sortBy") || "id";

let idSelect = document.getElementById("idDropButton");
let nameSelect = document.getElementById("nameDropButton");

let ascSelect = document.getElementById("ascDropButton");
let descSelect = document.getElementById("descDropButton");

let confirmButton = document.getElementById("confirmDropButton");

if (currentOrder == "asc"){
    ascSelect.classList.add("activeDrop");
    currentFilterParams[0] = "asc";
} else{
    descSelect.classList.add("activeDrop");
    currentFilterParams[0] = "desc";
}
if (currentSort == "id"){
    idSelect.classList.add("activeDrop");
    currentFilterParams[1] = "id";
} else{
    nameSelect.classList.add("activeDrop");
    currentFilterParams[1] = "name";
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
    nameSelect.classList.add("activeDrop");
    idSelect.classList.remove("activeDrop");
    currentFilterParams[1] = "name";
}
idSelect.onclick = () => {
    idSelect.classList.add("activeDrop");
    nameSelect.classList.remove("activeDrop");
    currentFilterParams[1] = "id";
}

confirmButton.onclick = () => {
    localStorage.setItem("order", currentFilterParams[0]);
    localStorage.setItem("sortBy", currentFilterParams[1]);
    window.location.href = `?order=${currentFilterParams[0]}&sortBy=${currentFilterParams[1]}`
}

const querySortCheck = new URLSearchParams(window.location.search);
let newQuery = "?";
if (querySortCheck.get("order") !== currentFilterParams[0] || querySortCheck.get("sortBy") !== currentFilterParams[1]){
    newQuery += `order=${currentFilterParams[0]}&sortBy=${currentFilterParams[1]}`;
    if (querySortCheck.get("messageToShow")){
        newQuery += `&messageToShow=${querySortCheck.get("messageToShow")}`;
    }
    window.location.href = newQuery;
}