function multiplyByNineFifths(number) {
    return number * (9/5);
};

function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
};

console.log(getFahrenheit(15)); // Returns 59