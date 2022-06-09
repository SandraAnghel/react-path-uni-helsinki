const Functions = () => {
  return (
    <div>
      <h4>Functions Component</h4>
    </div>
  );
};

const sum = (p1, p2) => {
  console.log(p1);
  console.log(p2);
  return p1 + p2;
};

const result = sum(1, 5);
console.log(result);

// const square = (p) => {
//   console.log(p);
//   return p * p;
// };

const square = (p) => p * p;

const squareResult = square(5);
console.log("From functions component " + squareResult);

const t = [1, 2, 3];
const tSquared = t.map((p) => p * p);
console.log("From functions component " + tSquared);

// Before ES6  the only way to define functions was by using the keyword 'function'
// 1. Give a name in function declaration
function product(a, b) {
  return a * b;
}

const productResult = product(2, 6);
console.log("From functions component " + productResult);

// 2. Use a function expression
const average = function (a, b) {
  return (a + b) / 2;
};

const averageResult = average(2, 5);
console.log("From functions component " + averageResult);

export default Functions;
