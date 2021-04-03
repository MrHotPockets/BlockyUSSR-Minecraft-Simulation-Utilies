const varToString = varObj => Object.keys(varObj)[0]

const isObject = input => {
    if(!(typeof(input) === 'object' && typeof(input) !== 'null')){
            throw `'Error: ${input} is not an object`
    }
}
const takeApartObject = (object) => {let { ice, cream } = object}

const checkProperties = (obj) => {
    for (var key in obj) {
        if (obj[key] === null)
            throw `Error: ${obj[key]} is null`;
    }
    return;
}

exports.takeApartObject = takeApartObject;
exports.varToString = varToString;
exports.isObject = isObject;
exports.checkProperties = checkProperties;
