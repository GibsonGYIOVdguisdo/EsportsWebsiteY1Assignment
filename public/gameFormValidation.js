function isEmpty(val) {
    return !val.trim();
}

function isInteger(val) {
    return parseInt(val) === parseFloat(val);
}

function isInRange(val) {
    if (parseFloat(val) > 2147483647) {
        return false;
    }
    if (parseFloat(val) < -2147483648) {
        return false;
    }
    return true;
}

function isNumber(val) {
    if (val === "0") {
        return true;
    }
    return !!parseFloat(val);
}

function isMoreThanOne(val) {
    return val > 0;
}

function isMaximumLength(val) {
    if (val.length > 200) {
        return true;
    }
    return false;
}

function validateNameValue(val) {
    let issues = [];
    if (isEmpty(val)) {
        issues.push("Empty");
    }
    if (isMaximumLength(val)) {
        issues.push("Length");
    }
    return issues;
}

function validateDurationValue(val) {
    let issues = [];
    if (isEmpty(val)) {
        issues.push("Empty");
    }
    if (!isNumber(val)) {
        issues.push("NotNumber");
    }
    if (!isInRange(val)) {
        issues.push("IntLimit");
    }
    if (!isMoreThanOne(val)) {
        issues.push("LessThan1");
    }
    return issues;
}

function validateTeamSize(val) {
    let issues = [];
    if (isEmpty(val)) {
        issues.push("Empty");
    }
    if (!isInteger(val)) {
        issues.push("NotInteger");
    }
    if (!isInRange(val)) {
        issues.push("IntLimit");
    }
    if (!isMoreThanOne(val)) {
        issues.push("LessThan1");
    }
    return issues;
}

function validateGameForm(formName) {
    const formToValidate = document.forms[formName];
    const nameField = formToValidate["name"];
    const durationField = formToValidate["duration"];
    const teamSizeField = formToValidate["team_size"];
    let errors = {
        Name: [],
        Duration: [],
        Size: [],
    };
    let valid = true;

    errors["Name"] = validateNameValue(nameField.value);
    if (!!errors["Name"].length) {
        valid = false;
    }

    errors["Duration"] = validateDurationValue(durationField.value);
    if (!!errors["Duration"].length) {
        valid = false;
    }

    errors["Size"] = validateTeamSize(teamSizeField.value);
    if (!!errors["Size"].length) {
        valid = false;
    }
    showValidationErrors(errors);
    return valid;
}

function showValidationErrors(errors) {
    let errorMessages = {
        Empty: " is required",
        NotNumber: " must be a number",
        NotInteger: " must be a whole number",
        Length: " must be less than 200 characters",
        IntLimit: " must be less than 2,147,483,648",
        LessThan1: " must be more than 0",
    };
    if (!!errors["Name"].length) {
        document.getElementById("nameStatus").innerText =
            "The name field" + errorMessages[errors["Name"][0]];
    } else {
        document.getElementById("nameStatus").innerHTML = "<br>";
    }

    if (!!errors["Duration"].length) {
        document.getElementById("durationStatus").innerText =
            "The duration field" + errorMessages[errors["Duration"][0]];
    } else {
        document.getElementById("durationStatus").innerHTML = "<br>";
    }

    if (!!errors["Size"].length) {
        document.getElementById("sizeStatus").innerText =
            "The size field" + errorMessages[errors["Size"][0]];
    } else {
        document.getElementById("sizeStatus").innerHTML = "<br>";
    }
}

var urlQuery = window.location.search;
var urlParams = new URLSearchParams(urlQuery);

if (urlParams.size) {
    let nameIssues = urlParams.get("Name").split(",");
    let durationIssues = urlParams.get("Duration").split(",");
    let sizeIssues = urlParams.get("Size").split(",");

    if (nameIssues == "") {
        nameIssues = [];
    }
    if (durationIssues == "") {
        durationIssues = [];
    }
    if (sizeIssues == "") {
        sizeIssues = [];
    }

    var errorsOnLoad = {
        Name: nameIssues,
        Duration: durationIssues,
        Size: sizeIssues,
    };

    showValidationErrors(errorsOnLoad);
}
