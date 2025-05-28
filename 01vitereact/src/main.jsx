import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

const anotherElement = (
  <a href="https://google.com" target="_blank">
    {" "}
    Visit Google
  </a>
);

const anotherUser = "Ashwani";
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click ,e to visit Google",
  anotherElement
);

ReactDom.createRoot(document.getElementById("root")).render(<App />);
