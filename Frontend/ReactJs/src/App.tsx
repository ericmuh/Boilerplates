import React, { Component } from "react";
import Hello from "./components/Hello";
import "../assets/css/index.css";
import Form from "./components/Form";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <>
        <Hello />
        <Form />
      </>
    </QueryClientProvider>
  );
}

export default App;
