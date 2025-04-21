// function sum(a, b) {
// 	return a + b;
// }

// let ans = sum(2, 3);
// console.log("Function definition:", sum);
// console.log("Function output:", ans);



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


const fs=require('fs')

const contents=fs.readFileSync('a.txt','utf-8')

console.log(contents)
