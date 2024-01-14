import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  // Obj to pass as argument
  let ourObj = {
    username: "Huzaifa",
    age: 22,
  };

  // Array to pass as argument
  let ourArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl p-5 mb-2">
        Hello to Tailwind CSS
      </h1>

      {/* <Card imageUrl="" Obj={ourObj} arr={ourArr} /> (Example to pass arr and obj)  */}

      <Card username="Huzaifa" btnText="View Profile" />
      <Card username="Huzaifa" btnText="Click me" />
    </>
  );
}

export default App;
