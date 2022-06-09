const ObjectMethods = () => {
  return (
    <div>
      <h4> Object, Methods and "this"</h4>
    </div>
  );
};

const arto = {
  name: "Arto Hellas",
  age: 35,
  education: "PhD",
  greet: function () {
    console.log("hello, my name is " + this.name);
  },
  doAddition: function (a, b) {
    console.log("Sum is " + (a + b));
  },
};

arto.doAddition(1, 4);

const referenceToAddition = arto.doAddition;
referenceToAddition(10, 15);

setTimeout(arto.greet.bind(arto), 1000);
arto.greet();

arto.growOlder = function () {
  this.age += 1;
};

console.log(arto.age);
arto.growOlder();
console.log(arto.age);

export default ObjectMethods;
