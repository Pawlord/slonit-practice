const operations = {
    miltiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
}

const calculate = (a, b, operation) => {
    return operation(a, b);
}

const selectedOperation = 'minus';

console.log(calculate(6, 3, operations[selectedOperation]));
