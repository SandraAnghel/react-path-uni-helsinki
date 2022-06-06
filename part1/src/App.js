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
