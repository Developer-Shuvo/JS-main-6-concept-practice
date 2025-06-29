// const price = 5000;
// const age = 8;
// const discountPrice = (price * age) / 100;
// const discountChild = (price * 30) / 100;

// if (age >= 30) {
//   console.log(
//     `You got a discount of 20% on your purchase. Now the price is ${discountPrice}`
//   );
// } else if (age < 10) {
//   console.log(
//     `This is a child and child also get a discount of 30%: ${discountChild}`
//   );
// } else {
//   console.log("You did not get a discount on your purchase");
// }

// let score = 85;

// if (score >= 90) {
//   console.log("Grade A");
// } else if (score >= 80) {
//   console.log("Grade B");
// } else if (score >= 70) {
//   console.log("Grade C");
// } else {
//   console.log("Fail");
// }

//  Condition statements// if, else if, else
let marks = 80;

if (marks >= 80 && marks <= 100) {
  console.log(
    `He is a brilliant student.. He got A+ grade .....Her marks is [${marks}] `
  );
} else if (marks >= 70 && marks < 80) {
  console.log(
    `He is a good student.. He got A grade .....Her marks is ${marks} `
  );
} else if (marks >= 60 && marks < 70) {
  console.log(
    `He is a average student.. He got B grade .....Her marks is ${marks} `
  );
} else if (marks >= 50 && marks < 60) {
  console.log(
    `He is a below average student.. He got C grade .....Her marks is ${marks} `
  );
} else if (marks < 30) {
  console.log(
    `He is a poor student.. He got D grade .....Her marks is ${marks} `
  );
} else {
  console.log("Something went wrong, please check the marks entered");
}
