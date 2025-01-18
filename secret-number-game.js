//Массив чисел от 1 до 100;
const numbersArr = Array.from({ length: 100 }).map((_, index) => index + 1);

const firstComputersNumber = random();
let targetNumber;

//Значения для бинарного поиска
let left = 0;
let right = numbersArr.length - 1;

while (left <= right) {
    //Находим середину массива
    const middleValue = Math.floor((left + right) / 2);
    targetNumber = numbersArr[middleValue];

    console.log(`Компьютер 2: Пробую число ${targetNumber}`)

    if (targetNumber === firstComputersNumber) {
        console.log('Компьютер 1: Угадал!');
        break;
    }
    if (targetNumber > firstComputersNumber) {
        console.log('Компьютер 1: Меньше. \n');
        //Сдвигаем правую границу до текущей середины массива в меньшую сторону
        right = middleValue - 1;
    } else {
        console.log('Компьютер 1: Больше. \n');
        //Сдвигаем левую границу до текущей середины массива в большую сторону
        left = middleValue + 1;
    }
}

//Вспомогательная функция для быстрого расчета рандомного числа из заданного диапазона (по дефолту от 1 до 100)
//Использую классическую функцию определения рандомного числа из диапазона для js
function random(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
