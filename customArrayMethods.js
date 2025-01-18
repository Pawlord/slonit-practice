function mySlice(arr, start = 0, end = arr.length) {
    if (!Array.isArray(arr)) throw new Error('Первым аргументом должен быть массив!');

    let result = [];

    //Если start или end отрицательные то высчитывается их индекс с конца
    //Если их значение превышает длину массива то благодаря функции Math.max их индекс становится 0
    if (start < 0) start = Math.max(arr.length + start, 0);
    if (end < 0) end = Math.max(arr.length + end, 0)

    //Корректировка end если он больше длины массива, чтобы не выходить за границу диапазона;
    end = Math.min(arr.length, end);

    for (let i = start; i < end; i++) {
        result.push(arr[i])
    }

    return result;
}

function myIndexOf(arr, item, from = 0) {
    if (!Array.isArray(arr)) throw new Error('Первым аргументом должен быть массив!');
    let findIndex = -1;
    //Если from отрицательный то индекс с которого начнется отсчет: arr.length + from
    let fromIndex = from >= 0 ? from : arr.length + from;

    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === item) {
            findIndex = i;
            break;
        }
    }

    return findIndex;
}

function myIncludes(arr, item, from = 0) {
    if (!Array.isArray(arr)) throw new Error('Первым аргументом должен быть массив!');

    let result = false;
    let fromIndex = from >= 0 ? from : arr.length + from;
    if (fromIndex < 0) fromIndex = 0;

    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === item) {
            result = true;
            break;
        }
    }

    return result;
}

//Массив с которым будут тестироваться методы
const arr = [1, 2, null, 4, 5];

//Примеры работы:
// const newArr = mySlice(arr);
// const newArr2 = arr.slice();

// const newArr = myIndexOf(arr, -3, -7);
// const newArr2 = arr.indexOf(-3, -7);

const newArr = myIncludes(arr);
const newArr2 = arr.includes();

console.log(newArr);
console.log(newArr2);




