const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      Greting app created by{" "}
      <a href="https://github.com/SandraAnghel">Sandra Anghel</a>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;

  const x = 1;
  let y = 5;
  console.log(x, y);
  y += 10;
  console.log(x, y);
  y = "some text";
  console.log(x, y);
  // x = 4;  this causes an error because x was defined with the keywork const which makes it a constant and its value can't be changed

  const t = [1, -1, 3];
  t.push(5);

  console.log(t.length);
  console.log(t[1]);

  t.forEach((value) => {
    console.log(value);
  });

  const t2 = t.concat(7);
  console.log(t);
  console.log(t2);

  const m1 = t.map((value) => value * 2);
  console.log(m1);

  const m2 = t.map((value) => "<li>" + value + "</li>");
  console.log(m2);

  const s = [1, 2, 3, 4, 5];
  const [first, second, ...rest] = s; // destructuring assignment
  console.log(first, second);
  console.log(rest);

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  );
};
export default App;
