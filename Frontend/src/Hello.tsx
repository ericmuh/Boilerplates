import React from "react";

const API_URL = "localhost:5000/api";
// Function implementation.
function Hello() {
  const [greetings, setGreetings] = React.useState({
    language: "English",
    greeting: "Hello",
  });
  const getPythonHello = () => {
    fetch(`${API_URL}api/hello`)
      .then((res) => res.json())
      .then((res) => setGreetings(res[Math.floor(Math.random() * res.length)]))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>
        {greetings.language} : {greetings.greeting}
      </h1>
      <hr />
      <br />

      <button onClick={getPythonHello}>
        Click to say hello in different Languages.
      </button>
    </div>
  );
}

export default Hello;
