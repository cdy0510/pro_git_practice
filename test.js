console.log("Hello World");
console.log("What is gugudan?");
console.log("What is factorial?");

function factorial(num) {
    var result = 1;
    for(var i = num; i > 0; i--) {
        result = result * i;
    }

    return result;
}
