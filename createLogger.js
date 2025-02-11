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