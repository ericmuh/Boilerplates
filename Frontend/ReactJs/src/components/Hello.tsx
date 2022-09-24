import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { getLanguages } from "../api";
import { API_URL } from "../variables";

function Hello() {
 // Access the client
   const queryClient = useQueryClient()
 
   // Queries
   const query = useQuery('languages', getLanguages)

  const [greetings, setGreetings] = React.useState({
    language: "English",
    greeting: "Hello",
  });
  const getHello = () => {
     setGreetings(query.data[Math.floor(Math.random() * query.data.length)])
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
