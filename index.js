Number.isInteger = Number.isInteger || function(value) {
    return typeof value === 'number'
        && Number.isFinite(value)
        && !(value % 1);
};

function generatePassword(passwordLength, useNum, useUppercase, useLowercase) {
    if (typeof passwordLength !== "number") {
        throw Error("Argument 'passwordLength' is not a number");
    }

    if (!Number.isInteger(passwordLength)) {
        throw Error("Argument 'passwordLength' is not an integer");
    }

    if (passwordLength <= 5 || passwordLength > 128) {
        throw Error("Argument 'passwordLength' is not in range [5, 128]");
    }

    var result = '';

    var flag = true;

    do {
        var currentArray = flag ? vowels : consonants;
        result = result + randomElement(currentArray);
        flag = !flag;
    } while(result.length !== passwordLength);

    return result;
}

var vowels = [
    'a',
    'o',
    'i',
    'e',
    'y',
    'u'
];

var consonants = [
    'b',
    'c',
    'g',
    'd',
    'z',
    'k',
    'l',
    'm',
    'n',
    'p',
    'r',
    's',
    't',
    'f',
    'h',
    'v',
    'w'
];

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

function randomBool() {
    return Math.random() < 0.5;
}

function randomElement(arr) {
    return arr[randomInteger(0, arr.length - 1)];
}

module.exports = generatePassword;