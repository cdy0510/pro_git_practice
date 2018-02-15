console.log("Hello World");

console.log("What is gugudan?");
console.log("This is gugu class");

for (var i = 1; i < 10; i++) {
	for (var j = 1; j < 10; j++) {
		console.log(i + " X " + j + " = " + i*j);
	}
}

console.log("What is factorial?");

function factorial(num) {
    var result = 1;
    for(var i = num; i > 0; i--) {
        result = result * i;
    }

    return result;
}

console.log("What is git");
console.log("Git is version control tool.");
console.log("END");
