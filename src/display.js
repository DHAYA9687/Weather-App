import React, { useContext } from "react";
import { appContext } from "./App.jsx";
const Display = () => {
  const { name } = useContext(appContext);
  return (
    <>
      <h1>name:{name}</h1>
    </>
  );
};
export default Display;
