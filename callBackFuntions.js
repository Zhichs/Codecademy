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