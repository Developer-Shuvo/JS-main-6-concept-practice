// Use Normal loop to find the sum of an array
let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}

console.log(`The sum of the array is: ${sum}`);

// Reverse loop to find the sum of an array

let marks = [10, 20, 30, 40, 50];
let total = 0;

for (let i = marks.length - 1; i >= 0; i--) {
  total = total + marks[i];
}

console.log(`The total marks is: ${total}`);



// Using loop it increase the value 1 by one

let value = 1;

for (let i = 0; i <= 10; i++) {
    value = value + 1;
    console.log (`The increased value is: ${value}`);
}




// 100 times print 

let name = " Love You JavaScript";

for (let i = 0; i<100; i++){
    console.log (`${name}+ ${i + 1}`);
}
