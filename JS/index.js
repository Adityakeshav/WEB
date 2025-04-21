// #1

// function sum(a, b) {
// 	return a + b;
// }

// let ans = sum(2, 3);
// console.log("Function definition:", sum);
// console.log("Function output:", ans);

// #2


// function sum(n){
//     let ans=0;
//     for (let i =1;i<=n;i++){
//         ans=ans+i
//     }
//     return ans;
// }

// const ans=sum(100)
// console.log(ans)
// const ans1=sum(101)
// console.log(ans1)
// const ans2=sum(102)
// console.log(ans2)


// #3

// const fs=require('fs')

// const contents=fs.readFileSync('a.txt','utf-8')
// console.log(contents)

// const contents2=fs.readFileSync('b.txt','utf-8')
// console.log(contents2)



// #4

// let ans=0;

// for (let i=0;i<=100000000;i++){
//     ans=ans+i
// }
// console.log(ans)


// #5

// const fs =require('fs')

// const contents=fs.readFileSync('a.txt','utf-8')
// console.log(contents)

// const contents1=fs.readFileSync('b.txt','utf-8')
// console.log(contents1)

// const contents2=fs.readFileSync('b.txt','utf-8')
// console.log(contents2)

// #6

// Read file Async Function

// const fs=require('fs');

// function print(err,data){
//     console.log(data);
// }

// const contents=fs.readFile('a.txt','utf-8',print);


// const contents1=fs.readFile('b.txt','utf-8',print);



// console.log("Done");


// #7

function timeout(){
    console.log("Click the button");
}

console.log("Hiii");


setTimeout(timeout,1000)

console.log("Welcome")

let c=0;
for (let i=0;i<1000000000;i++){
    c=c+i;
}
console.log("Expensive operation done");
