const validator = require("./basicValidation.js");

function validateNameValue(val){
    let issues = []
    if (validator.isEmpty(val)){
        issues.push("Empty")
    }
    return issues;
}

function validateEmailValue(val){
    let issues = []
    if (validator.isEmpty(val)){
        issues.push("Empty")
    }
    if (val.indexOf("@") === -1){
        issues.push("NotEmail")
    }
    return issues
}

function validatePlayer(name, email){
    errors = {};

    errors["Email"] = validateNameValue(name);

    errors["Name"] = validateEmailValue(email);

    return errors;
}


module.exports = {
    validatePlayer
};