
function isEmpty(val){
    return !val.trim();
}

function isInteger(val){
    return parseInt(val) === parseFloat(val);
}

function isNumber(val){
    return !!parseFloat(val);
}

function validateNameValue(val){
    let issues = []
    if (isEmpty(val)){
        issues.push("Empty")
    }
    return issues;
}

function validateDurationValue(val){
    let issues = []
    if (isEmpty(val)){
        issues.push("Empty")
    }
    if (!isNumber(val)){
        issues.push("NotNumber")
    }
    return issues;
}

function validateTeamSize(val){
    let issues = []
    if (isEmpty(val)){
        issues.push("Empty")
    }
    if (!isInteger(val)){
        issues.push("NotInteger")
    }
    return issues;
}

function validateGameForm(formName){
    const formToValidate = document.forms[formName];
    const nameField = formToValidate["name"];
    const durationField = formToValidate["duration"];
    const teamSizeField = formToValidate["team_size"];
    let errors = {
        "Name": [],
        "Duration": [],
        "Size": []
    };
    let valid = true;

    errors["Name"] = validateNameValue(nameField.value)
    if (!!errors["Name"].length){
        valid = false;
    }

    errors["Duration"] = validateDurationValue(durationField.value)
    if (!!errors["Duration"].length){
        valid = false;
    }
    
    errors["Size"] = validateTeamSize(teamSizeField.value)
    if (!!errors["Size"].length){
        valid = false;
    }
    showValidationErrors(errors);
    return valid;
}

function showValidationErrors(errors){
    console.log(errors)
    let errorMessages = {
        "Empty": " is required",
        "NotNumber": " must be a number", 
        "NotInteger": " must be a whole number"
    };
    console.log(!!errors["Name"].length);
    if (!!errors["Name"].length){
        document.getElementById("nameStatus").innerText = "The name field" + errorMessages[errors["Name"][0]]
    } else{
        document.getElementById("nameStatus").innerHTML = "<br>"
    }

    if (!!errors["Duration"].length){
        document.getElementById("durationStatus").innerText = "The name field" + errorMessages[errors["Duration"][0]]
    } else{
        document.getElementById("durationStatus").innerHTML = "<br>"
    }
    
    if (!!errors["Size"].length){
        document.getElementById("sizeStatus").innerText = "The name field" + errorMessages[errors["Size"][0]]
    } else{
        document.getElementById("sizeStatus").innerHTML = "<br>"
    }
}

var urlQuery = window.location.search;
var urlParams = new URLSearchParams(urlQuery);



let nameIssues = urlParams.get("Name").split(",");
let durationIssues = urlParams.get("Duration").split(",");
let sizeIssues = urlParams.get("Size").split(",");


if (nameIssues == ""){
    nameIssues = [];
}
if (durationIssues == ""){
    durationIssues = [];
}
if (sizeIssues == ""){
    sizeIssues = [];
}

var errorsOnLoad = {
    "Name": nameIssues,
    "Duration": durationIssues,
    "Size": sizeIssues
}

console.log(errorsOnLoad);
showValidationErrors(errorsOnLoad);