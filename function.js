// i want to use function to find the sum of an array

function sumArray (arr){

let sum = 0;
for (let i =0; i<arr.length; i++){
    sum = sum + arr[i];
}
return sum;
}

// Example usage
let numbers = [1, 2, 3, 4, 5];
let totalSum = sumArray(numbers);
console.log(`The sum of the array is: ${totalSum}`);

