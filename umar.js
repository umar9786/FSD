let name = 'umar';
const age = 20;

function add(a, b) {
    return a + b;
}

const add1 = (a, b) => a + b;

const greet = () => console.log(`hello ${name}`);

const square = x => x * x;

const multiply = (a, b) => {
    let result = a * b;
    return result;
};

// Output
greet();
console.log(add(10, 20));      // 30
console.log(add1(3, 6));       // 9
console.log(square(5));        // 25
console.log(multiply(4, 5));   // 20

