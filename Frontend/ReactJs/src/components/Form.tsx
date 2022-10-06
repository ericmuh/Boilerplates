import React from "react";
import { useMutation } from "react-query";
import { addLanguage } from "../api";
import { API_URL } from "../variables";

function Form() {
  const [language, setLanguage] = React.useState("");
  const [greeting, setGreeting] = React.useState("");
  const mutation = useMutation(addLanguage);
  return (
    <>
      <h1 className="text-lg text-center">
        If your language is not availble input it below
      </h1>
      <form
        onSubmit={() => {
          mutation.mutate({ language, greeting });
        }}
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
