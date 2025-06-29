// Array // let numbers = [1, 2, 3, 4, 5];

// Array Destructuring
let numbers = [1, 2, 3, 4, 5];
let [a, b, c, d, e] = numbers;

console.log(a, b, c, d, e);

//object destructuring

let person = { name: "Shuvo", age: 22 };
let { name, age } = person;

console.log(name, age);







//-------------------------------

let bike ={
    name: "Yamaha",
    model: "FZ",
    year: 2020,
    color: "Black",
    price: 150000,

    headLocation: {
        city: "Dhaka",
        country: "Bangladesh"
    },

    subLocation: {
        district: "Tangail",
        thana: "Madhupur"
    }
    }


    console.log(`Bike Name: ${bike.name}, 
        Bike Model: ${bike.model},
        Head Location: ${bike.headLocation.city},`)







console.log (`Sub Location: ${bike.subLocation.district[0]},`)