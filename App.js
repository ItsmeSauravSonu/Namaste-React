import React from "react";
import ReactDOM from "react-dom/client"; 


const title = (
    <h1  className="heading">
        Namaste React using JSX🚀
    </h1>
);

const data = 10000;
const HeadingComponent = () => (
    <div id="container">
        {data}
        <h2 className="heading">Namaste React Functional Component 🚀</h2>;
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);