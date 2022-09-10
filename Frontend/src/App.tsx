import React, { Component } from "react";
import Hello from "./components/Hello";
import "../assets/css/index.css";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Hello />
      <h1 className="text-lg">
        {" "}
        If your language is not availble input it below
      </h1>
      <Form />
    </>
  );
}

export default App;
