import React from "react";

export const API_URL = "http://127.0.0.1:5000";
function Hello() {
  const [greetings, setGreetings] = React.useState({
    language: "English",
    greeting: "Hello",
  });
  const getHello = () => {
    fetch(`${API_URL}/api/hello/`)
      .then((res) => res.json())
      .then((res) => setGreetings(res[Math.floor(Math.random() * res.length)]))
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex flex-col my-0 mx-auto enter align-center w-96 mt-48">
      <h1 className="text-4xl text-center">
        {greetings.language} : {greetings.greeting}
      </h1>
      <button onClick={getHello} className="bg-emerald-700  p-4 ">
        Click to say hello in different Languages.
      </button>
    </div>
  );
}

export default Hello;
