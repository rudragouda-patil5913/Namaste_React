import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement("h1", {}, "Hello React");

// JSX
const jsxheading = <h1 id="hey">Hello JSX React</h1>;

//Component

const Title = () => <h1>Title</h1>;

const Component = () => {
  return (
    <div>
      {Title()}
      <h1 id="hey">Hello Component React</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component />);
