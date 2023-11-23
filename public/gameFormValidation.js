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
    let errors;
    let valid = true;
    let errorMessages = {
        "Empty": " is required",
        "NotNumber": " must be a number", 
        "NotInteger": " must be a whole number"
    };

    errors = validateNameValue(nameField.value)
    if (!!errors.length){
        valid = false;
        document.getElementById("nameStatus").innerText = "The name field" + errorMessages[errors[0]]
    } else{
        document.getElementById("nameStatus").innerHTML = "<br>"
    }

    errors = validateDurationValue(durationField.value)
    if (!!errors.length){
        valid = false;
        document.getElementById("durationStatus").innerText = "The name field" + errorMessages[errors[0]]
    } else{
        document.getElementById("durationStatus").innerHTML = "<br>"
    }
    
    errors = validateTeamSize(teamSizeField.value)
    if (!!errors.length){
        valid = false;
        document.getElementById("sizeStatus").innerText = "The name field" + errorMessages[errors[0]]
    } else{
        document.getElementById("sizeStatus").innerHTML = "<br>"
    }
    return valid;
}
