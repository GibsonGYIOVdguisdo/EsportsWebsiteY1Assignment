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
    if (isEmpty(val)){
        return false;
    }
    return true;
}

function validateDurationValue(val){
    if (isEmpty(val)){
        return false;
    }
    if (!isNumber(val)){
        return false;
    }
    return true;
}

function validateTeamSize(val){
    if (isEmpty(val)){
        return false;
    }
    if (!isInteger(val)){
        return false;
    }
    return true;
}

function validateGameForm(formName){
    const formToValidate = document.forms[formName];
    const nameField = formToValidate["name"];
    const durationField = formToValidate["duration"];
    const teamSizeField = formToValidate["team_size"];

    let valid = true;
    if (!validateNameValue(nameField.value)){
        valid = false;
        document.getElementById("nameStatus").innerText = "Invalid"
    }
    else{
        document.getElementById("nameStatus").innerHTML = "<br>"
    }
    if (!validateDurationValue(durationField.value)){
        valid = false;
        document.getElementById("durationStatus").innerText = "Invalid"
    }
    else{
        document.getElementById("durationStatus").innerHTML = "<br>"
    }
    if (!validateTeamSize(teamSizeField.value)){
        valid = false;
        document.getElementById("sizeStatus").innerText = "Invalid"
    }
    else{
        document.getElementById("sizeStatus").innerHTML = "<br>"
    }
    return valid;
}