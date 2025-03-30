let firstname = "Aditya";
const age = 20;
var isStudent = true;
var isStudent = false;
var isStudent = "Yes";

console.log(firstname);
console.log(age);
console.log(isStudent);

// var , let , const
// var is globally scoped
// let and const are block scoped
// var variables can be updated and re-declared within its scope
// let variables can be updated but not re-declared
// const variables can neither be updated nor re-declared
// var variables are initialized with undefined whereas let and const variables are not initialized
// const must be initialized during declaration unlike let and var

// age=22;
// console.log(age);

let user1 = "Aditya";
let user2 = "keshav";
let user3 = "Rohit";

console.log(user1);

let users = ["Aditya", "keshav", "Rohit"];

console.log(users[0]);

// Operators

let sum = 3 + 4;
console.log(sum);

let isGreater = 4 > 3;
console.log(isGreater);

let umar = 20;

let canVoter = umar > 18 ? "yes" : "no";
console.log(canVoter);

// Function

function ramukaka(name) {
  return "Hello " + name;
}

let ram = ramukaka("Aditya");
console.log(ram);

console.log(ramukaka("keshav"));

function kamladevi(a, b) {
  let total = a + b;
  return total;
}

console.log(kamladevi(8, 4));
console.log(kamladevi(8, 8));

function isAdult(a) {
  if (a >= 18) {
    console.log("yes you are adult");
  } else {
    console.log("no you are bacha");
  }
}

let a = 88;
isAdult(a);

function print1to10(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
}
print1to10(10);

let users1 = ["Aditya", "keshav", "Rohit"];

let totaluser = users1.length;

for (let i = 0; i < totaluser; i++) {
  console.log(users[i]);
}

//Objects
//collection of key:value pairs

let user = {
  firstname1: "Aditya",
  age: 22,
  gender: "Male",
};

console.log(user.firstname1);

//Write a functon which takes an object as input has name , age , and gender and greets the user thier gender ( Hii Mr/Mrs name your age is age)

function takeuser(fname1, age2, gender1) {
  function greet(gender, fname1) {
    if (gender1 == "male") {
      console.log("Hii Mr " + fname1 + "your age is " + age2);
    } else {
      console.log("Hii Mrs" + fname1 + "your age is " + age2);
    }
  }
}

let arr = [
  "harkirat",
  21,
  {
    fname: "Aditya",
    age: 22,
  },
];

console.log(arr[0].fname);

//Create a function that takes an array of objects as input and return the users whose array age 18 > and male

function solve(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender == "male" && arr[i].age > 18) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

const users3 = [
  {
    name: "Aditya",
    age: 22,
    gender: "male",
  },
  {
    name: "keshav",
    age: 20,
    gender: "male",
  },
  {
    name: "Priya",
    age: 18,
    gender: "female",
  },
];

console.log(solve(users3));
