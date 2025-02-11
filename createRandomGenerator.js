function createRandomGenerator(min, max) {
    return function () {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

const generateRandom = createRandomGenerator(1, 50);
// Проверка работоспособности функции:
const randomNumber1 = generateRandom();
const randomNumber2 = generateRandom();
const randomNumber3 = generateRandom();
const randomNumber4 = generateRandom();
const randomNumber5 = generateRandom();
console.log(randomNumber1, randomNumber2, randomNumber3, randomNumber4, randomNumber5);

// Проверка что min, max не доступны извне:
console.log(min, max);
