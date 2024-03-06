//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let arrNums = [ 3, 78, 10, 13, 100 ]
let sum = arrNums.reduce( (acc, c) => acc + c, 0  )
alert(sum)
//using the reduce method that runs once, for each element in the array 'arrNums'
// created an arrow function with two values that will run each time
// the accumulator 'acc' & the current 'c' value
// the number after c is where it will start the accumulator, current starting at zero
// the accumulator runs through each and will add it to the current 
// example of accumulator: 
// first number is current, second is accumulator, equals new current 
//  0 + 3 = 3 // 3 + 78 = 81 // 81 + 10 = 91 // 91 + 13 = 104 // 100 + 104 = 204



//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

let newArr = [ 2, 10, 50 ]
for (let i = 0; i < newArr.length; i * 2){
    return newArr;
};

//Create a function that takes string
//Print the reverse of that string to the console

const stringFunction = (string) => {
    return string.reverse()
};

stringFunction('Hello');

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palindrome = (originalString) => {
    let lowercaseString = originalString.toLowerCase();
    // turning all cases into lower case for accurate assessment on if its the same in reverse or not
    let reverseString = lowercaseString.split('').reverse().join('');      
    // created a new string, where we take the lowercase and split, reverse, and rejoin the string
    return reverseString === lowercaseString; 
    //checking if the reverse string and original string is the same... returning a boolean true / false
  };
   
  palindrome("kitty cat");

// this would not read as true given that "kitty cat" is not the same characters forwards as it is backwards
