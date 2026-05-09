// import React from "react";
// import ReactDOM from "react-dom/client"
console.log("HELLO SATISH, THIS IS THE RIGHT FILE")
let parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1"),
    React.createElement("h2", {}, "I'm an h2"),
  ]),
);

let h1 = React.createElement("h1", {}, "satish kumar form React");
let r = ReactDOM.createRoot(document.getElementById("root"));
r.render(parent);
