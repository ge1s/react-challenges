import React, { useState } from "react";
import "./style.css";

export default function UseState() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="container">
        <button onClick={handleToggle}>Show/Hide</button>
        {toggle && <h1>Welcome to React</h1>}
        <SecondMethod />
      </div>
    </>
  );
}

function SecondMethod() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="container">
        <button onClick={handleToggle}>Show/Hide</button>
        {toggle == true ? <h1>Different Solution</h1> : null}
      </div>
    </>
  );
}
