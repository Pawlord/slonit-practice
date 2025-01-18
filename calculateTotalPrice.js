function calculateTotalPrice(pricesArr) {
    let totalPrice = 0;
    pricesArr.forEach(price => {
        totalPrice += price;
    });
    return totalPrice;
}

let topThreeCustomersPrices = [10000, 20000, 30000];
console.log(calculateTotalPrice(topThreeCustomersPrices));