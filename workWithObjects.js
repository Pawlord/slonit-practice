//Решил добавить функционал, проверки может ли строка быть конвертирована в целочисленное значение типа '10'

//Задание 1 
function sumNumericFields(obj) {
    let result = 0;

    for (const key in obj) {
        let value = obj[key];

        //Если строка может быть конвертирована то в переменной будет true за счет оператора '!'
        let canConvertToNumber = !isNaN(value);

        if (typeof value === 'number') result += (value);
        else if (typeof value === 'string' && canConvertToNumber) result += (+value)
    }
    return result;
}

//Задание со звездочкой
function filterNumericFields(obj) {
    let result = [];

    for (const key in obj) {
        let value = obj[key];
        let canConvertToNumber = !isNaN(value);

        if (typeof value === 'number') result.push(key);
        else if (typeof value === 'string' && canConvertToNumber) result.push(key)
    }

    return result.sort((a, b) => {
        keyA = obj[a];
        keyB = obj[b];

        return keyB - keyA;
    })
}

let res = sumNumericFields({
    name: 'Slonit',
    surname: 'Wilson',
    age: 19,
    amount: 35000,
    weight: '70',
});
console.log(res);

let res2 = filterNumericFields({
    name: 'Slonit',
    surname: 'Wilson',
    age: 19,
    weight: '70',
    amount: 35000,
    someString: 'Hello world',
    someNumber: 155,
})
console.log(res2)
