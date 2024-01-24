import React, { useContext } from "react";
import { appContext } from "./App.jsx";
const Getname = () => {
  const { setname } = useContext(appContext);
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(x) => {
          setname(x.target.value);
        }}
      />
    </>
  );
};
export default Getname;
