/**
 * LOOPING Technique
 * 1. for loop
 * 2. while loop
 * 3. do while loop
 * 4. for of loop --> for array
 * 5. for in loop --> for objects
 */


const friends = ['Elon', 'Bill', 'Mark', 'Waren'];

for(const friend of friends) {
  // console.log(friend);
}

for(let i = 0; i < friends.length; i++) {
  // console.log(i);
  // console.log(friends[i]);
}


const numbers = [5, 6, 33, 34, 65, 2246, 998, 2309];

for(let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// using while loop
let i = 0;
while(i < friends.length) {
  // console.log(friends[i]);
  i++;
}

let n = 0;
while(n < numbers.length) {
  console.log(numbers[n]);
  n++;
}