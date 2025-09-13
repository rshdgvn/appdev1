import React from "react";
import './App.css'

function Component() {
  return <h1>This is a component</h1>;
}

function App() {
  const headerStyles = {
    color: 'red'
  }
  const data = 'Sample Data'

  return (
    <>
      <Component />
      <h1 style={headerStyles}>I am writing in markup with JSX</h1>
      {data}
    </>
  );
}

export default App;
