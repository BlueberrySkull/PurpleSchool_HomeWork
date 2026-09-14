function crypto(passString) {
    const passArray = passString.split('');
    for (let i = 0; i < passArray.length / 2; i++) {
        let temp = passArray[i];
        passArray[i] = passArray[passArray.length -1 - i];
        passArray[passArray.length -1 - i] = temp;
    }
    return passArray.join('');
}

function check(cryptiedPass, passString) {
    return crypto(cryptiedPass) == passString;
}

const cryptiedPassword = crypto('ItsFineByMe')
console.log(cryptiedPassword);
console.log(check(cryptiedPassword, 'ItsFineByMe'));