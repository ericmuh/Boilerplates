import React from "react";
import { API_URL } from "../variables";

function Form() {
  const [language, setLanguage] = React.useState("");
  const [greeting, setGreeting] = React.useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(`${API_URL}/api/send/`, {
      method: "POST", // or 'PUT'
      body: JSON.stringify({ language, greeting }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1 className="text-lg text-center">
        If your language is not availble input it below
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col my-0 mx-auto  align-center w-96  mt-5">
        <input
          onChange={(e) => setLanguage(e.target.value)}
          type="text"
          placeholder="Lanaguage"
          className="mb-2"
        />{" "}
        <br />
        <input
          onChange={(e) => setGreeting(e.target.value)}
          type="text"
          placeholder="Greeting"
          className="mb-5"
        />{" "}
        <br />
        <button type="submit" className="bg-emerald-400">
          {" "}
          Submit
        </button>
      </form>
    </>
  );
}
export default Form;
