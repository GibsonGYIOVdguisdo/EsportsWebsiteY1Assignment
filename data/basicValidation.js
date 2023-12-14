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

module.exports = {
    isEmpty,
    isInteger,
    isNumber,
    isMaximumLength,
    isInRange,
    isMoreThanOne,
};
