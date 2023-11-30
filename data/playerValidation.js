const validator = require("./basicValidation.js");

function validateNameValue(val){
    let issues = []
    if (validator.isEmpty(val)){
        issues.push("Empty")
    }
    return issues;
}

function validateDurationValue(val){
    let issues = []
    if (validator.isEmpty(val)){
        issues.push("Empty")
    }
    if (!validator.isNumber(val)){
        issues.push("NotNumber")
    }
    return issues;
}

function validateTeamSize(val){
    let issues = []
    if (validator.isEmpty(val)){
        issues.push("Empty")
    }
    if (!validator.isInteger(val)){
        issues.push("NotInteger")
    }
    return issues;
}

function validatePlayer(name, duration, size){
    errors = {};

    errors["Name"] = validateNameValue(name);

    errors["Duration"] = validateDurationValue(duration);
    
    errors["Size"] = validateTeamSize(size);

    return errors;
}

module.exports = {
    validateDurationValue,
    validatePlayer,
    validateTeamSize
};