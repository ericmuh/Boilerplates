import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

const documentRoot = document.getElementById("root")!;
const renderRoot = createRoot(documentRoot);
renderRoot.render(<App />);
