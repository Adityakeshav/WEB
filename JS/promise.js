//Promise class gives u a promise , that i will return u something in the future

//Calling is easy , defining your own promise is where things get hard

function setTimeoutPromisified(ms){
	let p=new Promise(resolve => setTimeout(resolve,ms));
	return p;
}

function callback(){
	console.log("3 seconds have passed");
}

setTimeoutPromisified(3000).then(callback);
