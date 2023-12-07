
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


function validateEmailValue(val){
    let issues = []
    if (isEmpty(val)){
        issues.push("Empty")
    }
    if (val.indexOf("@") === -1){
        issues.push("NotEmail")
    }
    return issues
}

function validatePlayerForm(formName){
    const formToValidate = document.forms[formName];
    const nameField = formToValidate["name"];
    const emailField = formToValidate["email"];
    let errors = {
        "Name": [],
        "Email": []
    };

    let valid = true;

    errors["Name"] = validateNameValue(nameField.value)
    if (!!errors["Name"].length){
        valid = false;
    }

    errors["Email"] = validateEmailValue(emailField.value)
    if (!!errors["Email"].length){
        valid = false;
    }

    showValidationErrors(errors);
    return valid;
}

function showValidationErrors(errors){
    let errorMessages = {
        "Empty": " is required",
        "NotEmail": " must contain an @ symbol"
    };

    if (!!errors["Name"].length){
        document.getElementById("nameStatus").innerText = "The name field" + errorMessages[errors["Name"][0]]
    } else{
        document.getElementById("nameStatus").innerHTML = "<br>"
    }

    if (!!errors["Email"].length){
        document.getElementById("emailStatus").innerText = "The email field" + errorMessages[errors["Email"][0]]
    } else{
        console.log("asd")
        document.getElementById("emailStatus").innerHTML = "<br>"
    }
}

var urlQuery = window.location.search;
var urlParams = new URLSearchParams(urlQuery);

if (urlParams.size) {
    let emailIssues = urlParams.get("Email").split(",");
    let nameIssues = urlParams.get("Name").split(",");


    if (nameIssues == ""){
        nameIssues = [];
    }
    if (emailIssues == ""){
        emailIssues = [];
    }

    var errorsOnLoad = {
        "Name": nameIssues,
        "Email": emailIssues
    }

    console.log(errorsOnLoad);
    showValidationErrors(errorsOnLoad);
}