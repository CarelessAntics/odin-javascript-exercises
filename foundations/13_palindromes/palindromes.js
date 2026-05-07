const palindromes = function (string) {
    stringArr = string
                    .toLowerCase()
                    .split('')
                    .filter(item => /[a-z0-9]/.test(item));
                    
    return stringArr.join('') === stringArr.toReversed().join('');
};

// Do not edit below this line
module.exports = palindromes;
