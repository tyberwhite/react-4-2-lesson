////////////////////////////
// Friday, Dec 9th 2022
// Day 18
// Lesson 4.2
////////////////////////////

/////////////////////////////////
// I. Variables & Datatypes
/////////////////////////////////

////////////////////////
// A. Q & A
/* 
1. How do we assign a value to a variable?
    > We use the assignment operator "="
    > Example: let myVar = "some string";

2. How do we change the value of a variable?
    > We reassign the variable using the assignment operator.
    > Example: let myVar = "some new string";

3. How do we assign an existing variable to a new variable?
    > We assign the variable to another variable using the assignment operator.
    > Example: let  myNum = 5;
                    myVar = myNum;

4. What are declare, assign, and define?
    > Declare: Creating a variable. Example: "let carName;"
    > Assign: Using the assignment operator to assign a value to a variable. Example: "let x = 5;"
    > Define: Give a variable a value. Example: "let msg;" This variable is declared without a value.

5. What is pseudocoding and why should you do it?
    > An informal, plain language description of code that isn't actually code. It helps describe what an application or algorithm must do. 

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    > 80-90%
*/

////////////////////
// B. Strings
////////////////////

// 1. Create a variable called firstVariable
let firstVariable;

// 2. Assign it the value of the string "Hello World"
firstVariable = "Hello World";

// 3. Change the value of this variable to some number
firstVariable = 24;

// 4. Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;

// 5. Change the value of secondVariable to any string.
secondVariable = "These pretzels are making me thirsty!";

// 6. What is the value of firstVariable?
// Answer: 24

// 7. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
let yourName = "Jesse";
let greeting = "Hello, my name is " + yourName;

////////////////
// C. Booleans
////////////////

// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");

console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false);
console.log(e === "Kevin");
console.log(a + b === c);
console.log(a * a === d);
console.log(48 !== "48");

///////////////////
// D. The Farm
///////////////////

// 1. Declare a variable animal. Set it to "cow"
let animal = "cow";

// 2. Write code that will print out "mooooo" if the it is equal to cow
if (animal === "cow") {
  console.log("mooooo");
}

// 3. Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
animal = "aligator";

if (animal === "cow") {
  console.log("mooooo");
} else console.log("Hey! You're not a cow.");

////////////////////
// E. Driver's Ed
////////////////////

// 1. Make a variable that holds a person's age; be semantic
let personAge = 18;

// 2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
if (personAge >= 16) {
  console.log("Here are the keys!");
} else console.log("Sorry, you're too young");

///////////////////////////////////////////////////////
// II. Loops
// Remember: Use let when you initialize for loops!
///////////////////////////////////////////////////////

//////////////////
// A. The Basics
/////////////////

// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive
const printSomeNums = function () {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
};

// 2. Write a loop that will print out all the numbers from 10 up to and including 400
const printMoreNums = function () {
  for (let i = 10; i <= 400; i++) {
    console.log(i);
  }
};

// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
const printThirdNums = function () {
  for (let i = 12; i <= 4000; i += 3) {
    console.log(i);
  }
};

// 3. Rewritten with arrow function
const printThirdArrowFunc = (lowerBound, upperBound) => {
  for (let i = lowerBound; i <= upperBound; i += 3) {
    console.log(i);
  }
};

// Check if both functions return the same
// console.log(printThirdArrowFunc(12, 4000) === printThirdNums());

//////////////////
// B. Get Even
/////////////////

// 1. Print out the numbers that are within the range of 1 - 100
function printNumRange(lowerRange, upperRange) {
  for (let i = lowerRange; i <= upperRange; i++) {
    console.log(i);
  }
}

// Test: printNumRange(1, 100);

// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
function printNumRangeMsg(lowerRange, upperRange) {
  for (let i = lowerRange; i <= upperRange; i++) {
    if (i % 2 === 0) {
      console.log(`${i} <-- is an even number`);
    } else console.log(i);
  }
}

// Test: printNumRangeMsg(1, 100);

// 2. Rewritten using ternary operator
function printNumRangeMsgTernary(lowerRange, upperRange) {
  for (let i = lowerRange; i <= upperRange; i++) {
    console.log(i % 2 === 0 ? `${i} <-- is an even number` : i);
  }
}

// Test: printNumRangeMsgTernary(1, 100);

//////////////////////
// C. Give me Five
//////////////////////

// 1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
function multiOfFive(lowerRange, upperRange) {
  for (let i = lowerRange; i <= upperRange; i++) {
    if (i % 5 === 0) console.log(`I found a ${i}. High five!`);
  }
}

// Test: multiOfFive(0, 100);

// 1a. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
function multiOfFiveThree(lowerRange, upperRange) {
  for (let i = lowerRange; i <= upperRange; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`I found a ${i}. Three is a crowd`);
      console.log(`I found a ${i}. High five!`);
    } else if (i % 3 === 0) {
      console.log(`I found a ${i}. Three is a crowd`);
    } else if (i % 5 === 0) {
      console.log(`I found a ${i}. High five!`);
    }
  }
}

// Test: multiOfFiveThree(0, 100);

////////////////////////
// D. Savings Account
////////////////////////

// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account
let bank_account = 0;

function saveSum(lowerRange, upperRange) {
  let sum = 0;
  for (let i = lowerRange; i <= upperRange; i++) {
    sum += i;
  }
  bank_account += sum;
}

// Test: saveSum(1, 10);
// Test: console.log(bank_account);

// 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

function saveSumDouble(lowerRange, upperRange) {
  let sum = 0;
  for (let i = lowerRange; i <= upperRange; i++) {
    sum += i * 2;
  }
  bank_account += sum;
}

// Test: saveSumDouble(1, 100);
// Test: console.log(bank_account);

///////////////////////////////////////////////////////
// III. Arrays & Control Flow
///////////////////////////////////////////////////////

///////////////////////
// A. Talk about it:
///////////////////////

/*

1. What are the things in an array called?
    > elements

2. Do arrays guarantee those things will be in order?
    > Yes, arrays are an ordered collection of elements.

3. What real-life thing could you model with an array?
    > Any ordered list of items, such as a playlist of songs or a contact list of friends.

*/

//////////////////////
// B. Easy Does It
//////////////////////

// 1. Create an array that contains three quotes and store it in a variable called quotes
const quotes = [
  "If you're going through hell, keep going",
  "Don't let yesterday take up too much of today",
  "If things go wrong, don't go with them",
];

//////////////////////////
// C. Accessing Elements
/////////////////////////

const randomThings = [1, 10, "Hello", true];

// 1. How do you access the 1st element in the array?
//      > Using bracket notation and index
let firstElement = randomThings[0];

// 2. Change the value of "Hello" to "World"
randomThings[2] = "World";

// 3. Check the value of the array to make sure it updated the array
console.log(randomThings[2]);

//////////////////////////
// D. Change Values
/////////////////////////

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// 1. What would you write to access the 3rd element of the array?
// ourClass[2]

// 2. Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";

// 3. Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");

//////////////////////////
// E. Mix It Up
// Note: You don't really need .splice() for these. You could use it, but there are simpler array methods that are more appropriate.
/////////////////////////

const myArray = [5, 10, 500, 20];

// 1. Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon");
myArray.push("Socrates");

// 2. Remove the 5 from the beginning of the array.
myArray.shift();

// 3. Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");

// 4. Remove the string of your choice from the end of the array.
myArray.pop();

// 5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?

myArray.reverse();
// Yes, the array was mutated. It was reversed in place.
// Mutate means to change the value of something.
// No, it does not return anything. The reverse method modifies the array in place.

//////////////////////////
// F. Biggie Smalls
/////////////////////////

// Create a variable that contains an integer.
let myInt = 24;

// 1. console.log() "little number" if the number entered is less than 100
if (myInt < 100) {
  console.log(myInt, "little number");
}

// 2. console.log()"big number" if the number is greater than or equal to 100
if (myInt < 100) {
  console.log(myInt, "little number");
} else if (myInt >= 100) {
  console.log(myInt, "big number");
}

/////////////////////////////
// G. Monkey in the Middle
////////////////////////////

// 1. console.log() little number if the number entered is less than 5.
// 2. If the number entered is more than 10, log big number.
// 3. Otherwise, log "monkey".
let myNewInt = 8;

if (myNewInt < 5) {
  console.log(myNewInt, "little number");
} else if (myNewInt > 10) {
  console.log(myNewInt, "big number");
} else console.log("monkey");

///////////////////////////////
// H. What's in your closet?
///////////////////////////////

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybays",
  ],
];

// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// 2. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
// Syntax: array.splice(index, 0, element)
kristynsCloset.splice(6, 0, "raybans");

// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = "stained knit hat";

// 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
let thomsShirt = thomsCloset[0][0];

// 5. In the same way, access one item from Thom's pants array.
let thomsPants = thomsCloset[1][1];

// 6. Access one item from Thom's accessories array.
let thomsAccessory = thomsCloset[2][0];

// 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(
  `Thom is looking dashing in a ${thomsShirt}, ${thomsPants}, and ${thomsAccessory}!`
);

// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";

///////////////////////////////////////////////////////
// IV. Functions
///////////////////////////////////////////////////////

// A. printGreeting
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

function printGreeting(name) {
  return `Hola, ${name}! It's nice to meet you.`;
}

// Test: console.log(printGreeting("Danny"));

// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

function printCool(name) {
  console.log(`${name} is cool!`);
}

// Test: printCool("Alex");

// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
function calculateCube(num) {
  return num ** 3;
}

// Test: console.log(calculateCube(5));

// D. isVowel
// Write a function isVowe lthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
function isVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char.toLowerCase()) ? true : false;
}

// Test: console.log(isVowel("A")); // true
// Test: console.log(isVowel("x")); // false

// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
function getTwoLengths(str1, str2) {
  return [str1.length, str2.length];
}

// Rewritten as an arrow function
const getTwoLengthsArr = (str1, str2) => [str1.length, str2.length];

// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
function getMultipleLengths(arr) {
  const numArray = [];
  arr.forEach((element) => numArray.push(element.length));
  return numArray;
}

// Test: console.log(getMultipleLengths(["one", "two", "three", "dinosaur"]));

// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
function maxOfThree(num1, num2, num3) {
  let num = 0;
  const arr = [num1, num2, num3];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      num = arr[i];
    }
  }
  return num;
}

// Test: console.log(maxOfThree(67, 824, -67, 89));

// Rewritten using built in functions
// Reduce Syntax: array.reduce((accumulator, currentValue) => {/*...*/}, initialValue)
function maxOfThree(num1, num2, num3) {
  const arr = [num1, num2, num3];
  return arr.reduce(
    (element, largest) => (element > largest ? element : largest),
    0
  );
}

console.log(maxOfThree(67, 824, -67, 89));

// H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
function printLongestWord(arr) {
  return arr.reduce(function (a, b) {
    return a.length >= b.length ? a : b;
  });
}

// Test: console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter1", "Peanutbutter2", "big", "Todd"]));

///////////////////////////////////////////////////////
// V. Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.
///////////////////////////////////////////////////////

// A. Make a user object
// 1. Create an object called user.
// 2. Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.

let user = {
  name: "wade",
  email: "wadeboggs@redsox.com",
  age: 64,
  purchased: [],
};

// B. Update the user
// 1. Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
user.email = "wadeboggs@yankees.com";

// 2. Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator.
user.age++;

// C. Adding keys and values
// 1. Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
user.location = "Hawaii";

// D. Shopaholic!
// 1. Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
user.purchased.push("carbohydrates");

// 2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
user.purchased.push("peace of mind");

// 3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
user.purchased.push("Merino jodhpurs");

// 4. Console.log just the "Merino jodhpurs" from the purchased array.
console.log(user.purchased[2]);

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// 1. Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
  name: "tony gwynn",
  age: 54,
  location: "California",
  purchased: [],
};

// 2. Console.log just the friend's name
console.log(user.friend.name);

// 3. Console.log just the friend's location
console.log(user.friend.location);

// 4. CHANGE the friend's age to 55
user.friend.age = 55;

// 5. The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
user.friend.purchased.push("The One Ring");

// 6. The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
user.friend.purchased.push("a latte");

// 7. Console.log just "A latte" from the friend's purchased array.
console.log(user.friend.purchased[1]);

console.log("User Purchased: ", user.purchased);

// F. Loops
// 1. Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
function iterateUserArr(user) {
  for (let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i]);
  }
}

//Test: iterateUserArr(user);

// 2. Write a for loop that iterates over the Friend's purchased array, and prints each element to the console. -- We can use the same array
iterateUserArr(user.friend);

// G. Functions can operate on objects
// 1. Write a single function updateUser that takes no parameters. When the function is run, it should:
// 2. it should increment the user's age by 1
// 3. make the user's name uppercase

function updateUser() {
  user.age = user.age++;
  user.name = user.name.toUpperCase();
}

// Test: updateUser();

// 2. Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.

function oldAndLoud(person) {
  person.age = person.age++;
  person.name = person.name.toUpperCase();
}

// Test: oldAndLoud(user);

////////////////////////////////////////
// Cat Combinator
////////////////////////////////////////

// 1. Mama cat
// Define an object called cat1 that contains the following properties: name, breed, age (a number)
// console.log the cat's age
// console.log the cat's breed

let cat1 = {
  name: "Puddy",
  breed: "Calico",
  age: 8,
};

console.log(cat1.age);
console.log(cat1.breed);

// 2. Papa cat
// Define an object called cat2 that also contains the properties: name, breed, age (a number)

let cat2 = {
  name: "Cooper",
  breed: "Sphynx",
  age: 13,
};

// 3. Combine Cats!
// Write a function combineCats that has two parameters mama, and papa. The function will take two arguments -- each a cat object.
// Pass cat1 and cat2 as arguments to the combineCats function. The function should console.log them.
function combineCats(arg1, arg2) {
  console.log(arg1);
  console.log(arg2);
}

// console.log(combineCats(cat1, cat2));

// Make it so the combineCats function will return a combination of the two incoming cats
// The result should be an object wherein the:
// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between

function comebineCatsCombo(arg1, arg2) {
  return {
    name: arg1.name + arg2.name,
    breed: arg1.breed + "-" + arg2.breed,
    age: 1,
  };
}

// console.log(comebineCatsCombo(cat1, cat2));

// 4. Cat brain bender
console.log(
  comebineCatsCombo(
    comebineCatsCombo(cat1, cat2),
    comebineCatsCombo(cat1, cat2)
  )
);

// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.

console.log(
  comebineCatsCombo(
    comebineCatsCombo(
      comebineCatsCombo(cat1, cat2),
      comebineCatsCombo(cat1, cat2)
    ),
    comebineCatsCombo(
      comebineCatsCombo(cat1, cat2),
      comebineCatsCombo(cat1, cat2)
    )
  )
);
