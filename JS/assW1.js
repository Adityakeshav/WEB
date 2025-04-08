// Write a function called sum that finds the sum from 1 to a number

// function sum1ton(n){
//   let sum=0;
//   for (let i=0;i<=n;i++){
//     sum+=i;
//   }
//   return sum;
// }

// let ans=sum1ton(10)
// console.log(ans)

//Write a function that takes a user as an input and greets them with their name and age

// function greetUser(user){
//   const {name,age}=user;
//   console.log(`Hello ${name}, you are ${age} years old`);
// }
// let user={
//   name:"Aditya",
//   age:20
// }

// greetUser(user)

//Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

// function greetUser(user){
//   if (user.gender=="male"){
//     console.log(`hey mr ${user.name} your age is ${user.age}`)
//   }else if (user.gender=="female"){
//     console.log(`hey mrs ${user.name} your age is ${user.age}`)
//   }else{
//     console.log(`Hey mr/mrs ${user.name} your age is ${user.age}`)
//   }
// }

// user1={
//   name:"Aditya",
//   age:20,
//   gender:"male"
// }
// user2={
//   name:"Anjali",
//   age:20,
//   gender:"female"
// }

// greetUser(user1)
// greetUser(user2)

//Also tell the user if they are legal to vote or not

// function canVote(user){
//   if (user.age>18){
//     console.log(`${user.name}, You can vote`)
//   }else{
//     console.log(`Sorry ${user.name} you cannot vote`)
//   }
// }

// user1={
//   name:"Aditya",
//   age:20,
//   gender:"male"
// }
// user2={
//   name:"Anjali",
//   age:18,
//   gender:"female"
// }
// canVote(user1)
// canVote(user2)

//Arrays of object

// const arr=[{
//   name:"Aditya",
//   age:20
// },
//            {
//              name:"Anjali",
//              age:20
//            }
//           ]

// console.log(arr[0].name)

//Obj of obj

// const user={
//   name:"Aditya",
//   age:20,
//   add:{
//     state:"Punjab",
//     city:"Phagwara"
//   }
  
// }

// console.log(user)