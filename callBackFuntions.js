const isEven = (number) => {
    return number % 2 == 0;
}

let printMsg = (func, num) => {
    const booleanOutput = func(num);
    console.log(`The number ${num} is an even number: ${booleanOutput}.`)
}

  // Pass in isEven as the callback function
printMsg(isEven, 4); 
  // Prints: The number 4 is an even number: True.
  

const arrayOfNumbers = [1, 2, 3, 4];
  /* .reduce - argument one and argument two are index 0 and 1 in the array, 
    on the second pass the accumulator = return value*/
const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {  
  return accumulator + currentValue;
});

console.log(sum); // 10