const array = [10, 20, 30];

console.log("for...")
for (let i = 0; i < array.length; i++) {
	console.log(array[i]);
}

console.log("for...in");
for (let n in array) {
	console.log(array[n]);
}

console.log("for...of");
for (let n of array) {
	console.log(n);
}
