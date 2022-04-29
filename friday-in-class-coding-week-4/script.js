// /Friday ES6 in class coding assignment. 
 

// //1 Convert the following function into an arrow function named "arrowMyFunction".
// const myFunction = function (num1, num2) {
//       return num1 + num2;
// };

const arrowMyFunction = (num1, num2) => num1 + num2;



// //2 Convert the following function into a one-lined arrow function without a 
//return statement (the return is implicit) . Name the function arrowAdd100
// const add100 = function (money) {
//      return money + 100;
// };

const arrowAdd100 = money => money + 100;




// //3 Create an arrow function that takes TWO arguments, a string and a single letter.  
//The function will count the number of times the specified letter occurs in the string. 
//**Not case sensitive
// Examples:
// countLetters('Hello my name is John', 'i') returns 1
// countLetters('Hello my name is John', 'h') returns 2
// countLetters('We love this city a lot, sometimes', 'e') returns 4

const countLetters = (str, letter) => {
    let newStr = str.split("");             //Convert string to array
    let counter = 0;

    newStr.forEach(element => {
        element = element.toLowerCase();    //Change all elements in array to lowercase
        if (element === letter) {
            counter ++;                     //If letter is in array add 1 to the counter
        };        
    });

    return counter;                         
};

console.log(countLetters('Hello my name is John', 'i')) //returns 1
console.log(countLetters('Hello my name is John', 'h')) //returns 2
console.log(countLetters('We love this city a lot, sometimes', 'e')) //returns 4