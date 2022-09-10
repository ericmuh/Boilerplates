import React from "react";
import { API_URL } from "./Hello";

function Form() {
  const [language, setLanguage] = React.useState("");
  const [greeting, setGreeting] = React.useState("");
  const handleSubmit = () => {
    fetch(`${API_URL}/send/`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({language,greeting}),
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className=""
          onChange={(e) => setLanguage(e.target.value)}
          type="text"
        />
        <input
          className=""
          onChange={(e) => setGreeting(e.target.value)}
          type="text"
        />
      </form>
    </>
  );
}
export default Form;
