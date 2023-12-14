const validator = require("../data/basicValidation.js");

function validateNameValue(val) {
    let issues = [];
    if (validator.isEmpty(val)) {
        issues.push("Empty");
    }
    if (validator.isMaximumLength(val)) {
        issues.push("Length");
    }
    return issues;
}

function validateDurationValue(val) {
    let issues = [];
    if (validator.isEmpty(val)) {
        issues.push("Empty");
    }
    if (!validator.isNumber(val)) {
        issues.push("NotNumber");
    }
    if (!validator.isInRange(val)) {
        issues.push("IntLimit");
    }
    if (!validator.isMoreThanOne(val)) {
        issues.push("LessThan1");
    }
    return issues;
}

function validateTeamSize(val) {
    let issues = [];
    if (validator.isEmpty(val)) {
        issues.push("Empty");
    }
    if (!validator.isInteger(val)) {
        issues.push("NotInteger");
    }
    if (!validator.isInRange(val)) {
        issues.push("IntLimit");
    }
    if (!validator.isMoreThanOne(val)) {
        issues.push("LessThan1");
    }
    return issues;
}

function validateGame(name, duration, size) {
    errors = {};

    errors["Name"] = validateNameValue(name);

    errors["Duration"] = validateDurationValue(duration);

    errors["Size"] = validateTeamSize(size);

    return errors;
}

module.exports = {
    validateDurationValue,
    validateGame,
    validateTeamSize,
};
