import React from "react";
import './App.css'

function Component() {
  return <h1>This is a component</h1>;
}

function App() {
  const headerStyles = {
    color: 'red'
  }

  const value = true
  let data;

  if (value) {
    data = "I'm real"
  } else {
    data = "I'm fake"
  }
 
  const infos = [
    {name: 'rshdgvn', age: 20},
    {name: 'vincent', age: 22},
    {name: 'ryan', age: 22},
  ]

  return (
    <>
      <Component />
      <h1 style={headerStyles}>I am writing in markup with JSX</h1>
      <p>{data}</p>
      <ul>
        {infos.map((info)=><li>{`Hello i am ${info.name} and I am ${info.age} years old`}</li>)}
      </ul>
    </>
  );
}

export default App;
