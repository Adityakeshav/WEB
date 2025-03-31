const fs =require("fs")

const contentsA =fs.readFileSync("a.txt","utf-8");
const contentsB=fs.readFileSync("b.txt","utf-8");

console.log(contentsA);
console.log(contentsB);