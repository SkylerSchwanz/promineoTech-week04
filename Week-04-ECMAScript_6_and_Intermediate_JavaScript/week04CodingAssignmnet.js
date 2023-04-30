//  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];



// 1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// (Note) subtract first index in ages (ages.shift() returns index 0) from last index (with bracket notation and length property).
ages[ages.length - 1] -= ages.shift();

// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// (Note) adding random int (0, 10) to array as per instruction
ages.unshift(Math.ceil(Math.random() * 10));
console.log(ages);





// 1c. Use a loop to iterate through the array and calculate the average age.

// (Note) function to calculate averages.
/* let findAverage = (array) => {
  // assigning an int variable to 0 for loop below;
  let average = 0;
  // loop iterating through each element in array parameter, adding each value to average
  array.forEach((element) => {
    average += element;
  });
  // returning loop result by array.length property for average.
  return average / array.length;
};
console.log(findAverage(ages)); */

// factored function using array methods (reduce). Does the same actions as the for loop function above but much neater.
let findAverage1 = (array) => array.reduce((accumulator, currentValue) => accumulator + currentValue) / array.length;
console.log(findAverage1(ages));





// Question 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// (Note) creating name variable for an array with strings.
let names = new Array("Sam", "Tommy", "Tim", "Sally", "Buck", "Bob");

// 2a. Use a loop to iterate through the array and calculate the average number of letters per name.
let namesCharacterLength = names.map(
  (element) => element.length / names.length
);
console.log(namesCharacterLength);

// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
// (Note) method returning a concatenation of all elements (strings) of names array into singular string seperated by spaces.
console.log(names.join(" "));

// (Note) array method reduce performing the same action above:
console.log(
  names.reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`)
);





// 3. How do you access the last element of any array?
// array[array.length - 1];

// 4. How do you access the first element of any array?
// array[0];





// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = new Array();

// (Note) Using forEach method to iterate through names array to push each element length into nameLengths.
/*
names.forEach(element => {
    nameLengths.push(element.length);
});
console.log(nameLengths);
*/

// (Note) assigning nameLengths to the returned array of names after using map method. This performs the same action as the function above (53 - 55).
nameLengths = names.map((element) => element.length);
console.log(nameLengths);





// 6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
// (Note) Using reduce method to return the sum of all elements in nameLengths:
console.log(
  nameLengths.reduce((accumulator, currentValue) => accumulator + currentValue)
);

// (Note) Using traditional for loop to calculate the sum of all elements to nameLengths.
let result = 0;
for (let i = 0; i < nameLengths.length; i++) {
  result += nameLengths[i];
}
console.log(result);





// 7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
let wordConcatenation = (word, n) => word.repeat(n);
console.log(wordConcatenation("Hello", 3));





// 8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
let fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(fullName("John", "Doe"));





// 9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

/* let sumOfArray = array => {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
};
console.log(sumOfArray([40, 20, 30, 10]) > 100); */

// (Note) Using the reduce method to return the sum of the array and returning if the sum is above 100. This does the same as the for loop on line 90 - 96.
let sumAbove100 = (array) =>
  array.reduce((accumulator, currentValue) => currentValue + accumulator) > 100;
console.log(sumAbove100([40, 20, 30, 10]));





// 10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.
let averageOfArray = (array) =>
  array.reduce((accumulator, currentValue) => currentValue + accumulator) /
  array.length;
console.log(averageOfArray([10, 50, 40, 20]));





// 11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let averageOfArrays = (arr1, arr2) =>
  averageOfArray(arr1) > averageOfArray(arr2);
console.log(averageOfArrays([40, 90, 60, 88], [20, 20, 200, 100]));





// 12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let willBuyDrink = (isHotOutside, moneyInPocket) =>
  isHotOutside && moneyInPocket > 10.5;
console.log(willBuyDrink(true, 68));





// 13.  Create a function of your own that solves a problem.
// (Note) Inspiration to make this function was from CodeWars' 'Who likes it?'
// The purpose of the function below is: given an array of names, return a string with how many people liking a hypothetical post.
function likes(names) {
  switch (names.length) {
    case 0:
      return `no one likes this`;
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

console.log(
  likes(["Edwardo", "Jamal", "Jaquavious", "Dominic", "Dion", "Laquida"])
);
