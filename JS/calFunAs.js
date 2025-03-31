//Functional Argument

function sum(a,b){
    return a+b;
}

function subs(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function doOp(a,b,op){
    return op(a,b)
}

const ans=doOp(10,2,divide);
console.log(ans);