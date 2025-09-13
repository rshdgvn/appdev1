import React from "react";
import './App.css'

function Component() {
  return <h1>This is a component</h1>;
}

function App() {
  const headerStyles = {
    color: 'red'
  }
  
  return (
    <>
      <Component />
      <h1 style={headerStyles}>I am writing in markup with JSX</h1>
    </>
  );
}

export default App;
