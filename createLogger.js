// Напишите функцию createLogger(), которая должна возвращать объект с методами:

// log(message): сохраняет сообщение в массив.

// getLogs(): выводит все сохраненные сообщения.



// Массив с сообщениями должен быть доступен только внутри замыкания. Посторонние функции не должны иметь прямого доступа к этому массиву.

function createLogger() {
    const logs = [];

    return {
        log(message) {
            logs.push(message);
        },
        getLogs() {
            console.log(logs);
        }
    }
}

const checkLogs = createLogger();
// Проверка работы функции:
checkLogs.log('Hello');
checkLogs.log('World');
checkLogs.log('it\'s work');
checkLogs.getLogs();

// Проверка, что массив с логами не доступен вне замыкания:
console.log(logs);