
function isEmpty(val){
    return !val.trim();
}

function isInteger(val){
    return parseInt(val) === parseFloat(val);
}

function isNumber(val){
    return !!parseFloat(val);
}

module.exports = {
    isEmpty,
    isInteger,
    isNumber
};