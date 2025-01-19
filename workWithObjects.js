// Задача со звездочкой - то же самое. Но вместо просто числа с суммой полей метод возвращает массив с названиями полей, причем эти названия полей отсортированы по убыванию.
// Например, для объекта {name: 'Vasya', friends: 5, likes: 19, projects: 7} вернется массив [likes, projects, friends].

//Задание 1 
function sumNumericFields(obj) {
    let result = 0;

    for (const key in obj) {
        let value = obj[key];

        //Проверка, является ли значение объекта числом
        if (typeof value === 'number') result += (value);
    }
    return result;
}

//Задание со звездочкой
function filterNumericFields(obj) {
    let result = [];

    for (const key in obj) {
        let value = obj[key];

        if (typeof value === 'number') result.push(key);
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
});
console.log(res);

let res2 = filterNumericFields({
    name: 'Slonit',
    surname: 'Wilson',
    age: 19,
    amount: 35000,
    someString: 'Hello world',
    someNumber: 155,
})
console.log(res2)
