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

function validateGame(name, duration, size){
    errors = {};

    errors["Name"] = validateNameValue(name);

    errors["Duration"] = validateDurationValue(duration);
    
    errors["Size"] = validateTeamSize(size);

    return errors;
}

module.exports = {
    validateDurationValue,
    validateGame,
    validateTeamSize
};