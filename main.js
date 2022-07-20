const invertCase = (str) => {
    let result = '';

    if (str === '') {
        return `It's empty string!`
    } else {
        for (let index = 0; index < str.length; index++) {
            if (str[index] === str[index].toUpperCase()) {
                result += `${str[index].toLowerCase()}`;
            } else if (str[index] === str[index].toLowerCase()) {
                result += `${str[index].toUpperCase()}`;
            } else {
                result += `${str[index]}`;
            }
        }

        return result;
    }
}

console.log(invertCase('Hello, World!')); // hELLO, wORLD!
console.log(invertCase('I loVe JS'));     // i LOvE js