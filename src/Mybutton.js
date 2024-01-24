import React from "react";

function Mybutton({ count, onClick }) {
  return <button onClick={onClick}>Click me{count} times</button>;
}
export default Mybutton;
