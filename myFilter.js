function myFilter(arr, callback) {
    if (!Array.isArray(arr)) throw new Error(`"${arr}".myFilter is not a function`);
    if (!callback) throw new Error(`${callback} is not a function.`)

    const result = [];

    arr.forEach(elem => {
        if (callback(elem)) result.push(elem);
    });
    return result;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

//Кастомный myFilter
const evenNumber = myFilter(arr, num => num % 2 === 0);
const greaterThanThree = myFilter(arr, num => num > 3);

//Оригинальный filter
const evenNumber2 = arr.filter(num => num % 2 === 0);
const greaterThanThree2 = arr.filter(num => num > 3);

console.log(evenNumber, greaterThanThree);
console.log(evenNumber2, greaterThanThree2);
