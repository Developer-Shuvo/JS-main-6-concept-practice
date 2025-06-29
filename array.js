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




//-----------------Array of object----------------------------
// ----------Map Method-------------------


let bikes = [
    {Brand: "Yamaha", Model: "FZ", Year: 2020, Color: "Black", Price: 150000},
    {Brand: "Hero", Model: "Splander", Year: 2010, Color: "Red", Price: 110000},
    {Brand: "Royal Enfield", Model: "Classic", Year: 2025, Color: "Black", Price: 350000},
    {Brand: "Suzuki", Model: "Gixxer", Year: 2023, Color: "Blue", Price: 250000}
];

//Brand list
const brands= bikes.map(product=> product.Brand);
console.log ("Bike Brand list is:",brands);

//Model list
const models = bikes.map (product => product.Model);
console.log ("Bike Model list is: ", models);



const price = bikes.map (product=> product.Price);
console.log ("Bike Price list is: ", price);
