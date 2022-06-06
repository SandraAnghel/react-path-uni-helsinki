const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  );
};

const Total = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Number of exercises:
        {props.total}
      </p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const x = 1;
  let y = 5;
  console.log(x, y);
  y += 10;
  console.log(x, y);
  y = "some text";
  console.log(x, y);
  // x = 4;  this causes an error because x was defined with the keywork const which makes it a constant and its value can't be changed

  return (
    <div>
      <Header name={course} />
      <Content part1={part1} exercises1={exercises1} />
      <Content part2={part2} exercises2={exercises2} />
      <Content part3={part3} exercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
