//Задание 1
const fixString = (str) => {
    if (str.length === 0 || typeof (str) !== 'string') {
        throw new Error('Нужно указать строку!')
    } else {
        const resultString = str[0].toUpperCase() + str.substring(1);
        return resultString;
    }
}

console.log(fixString('привет'))

//Задание 2
const sliceString = (str, maxLength = 30) => {
    const symbolsArr = ['(', ',', '.', '!', '?', ':', ';', ')', '/', ' ']
    let newString = '';

    if (str.length < maxLength) return str;

    let lastIndex = 0;
    for (let i = maxLength; i >= 0; i--) {
        if (symbolsArr.includes(str[i])) {
            lastIndex = i;
            break;
        }
    }

    if (lastIndex !== 0) newString = str.substring(0, lastIndex) + '...';
    else newString = str.substring(0, maxLength) + '...';

    return newString;
}

console.log(sliceString("Привет мир как дела?", 10))

//Задание 3
const compareStrings = (str1, str2) => {
    if (typeof (str1) !== 'string' || typeof (str2) !== 'string') {
        throw new Error('Функция должна принимать две строки!')
    }

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    return str1.includes(str2) || str2.includes(str1);
}

console.log(compareStrings('Мировой', 'корень'));
console.log(compareStrings('Мировой', 'мир'));
