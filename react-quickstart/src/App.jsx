import React, {useState} from "react";
import "./App.css";

function Component() {
  return <h1>This is a component</h1>;
}

function ComponentToShare ({data}) {
  return (
    <h1>Im getting this data: <span>`{data}`</span> fromm app</h1>
  )
}

function App() {
  const headerStyles = {
    color: "red",
  };

  // const value = true
  const [value, setValue] = useState(true);

  const handleDate = () => {
    setValue(!value);
  };

  let data;

  if (value) {
    data = "I'm real";
  } else {
    data = "I'm fake";
  }

  const infos = [
    { name: "rshdgvn", age: 20 },
    { name: "vincent", age: 22 },
    { name: "ryan", age: 22 },
  ];

  const handleEvents = () => {
    console.log("This is an example of handling events");
  };

  return (
    <>
      <Component />
      <h1 style={headerStyles}>I am writing in markup with JSX</h1>
      <p>{data}</p>
      <button onClick={handleDate}>Change me</button>
      <ul>
        {infos.map((info) => (
          <li>{`Hello i am ${info.name} and I am ${info.age} years old`}</li>
        ))}
      </ul>
      <button onClick={handleEvents}>Click</button>
      <ComponentToShare data={data}/>
    </>
  );
}

export default App;
