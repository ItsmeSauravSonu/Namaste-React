import React from "react";
import ReactDOM from "react-dom/client"; 

//React.createElement =>React Element (Object) =>HTML element (render)

//JSX is not HTML in JS, it's like html syntax, xml like syntax
// JSX => Babel transpiles it into React.createElement => React.createElement =>React Element (Object) =>HTML element (render)
const Title = () => (
    <h1  className="heading">
        Namaste React using JSX🚀
    </h1>
);


//React components
//class based components --> old way
//Functional components  --> New

// React functional componenet: A function that returns piece of JSX code i.e A js function that returns react Element

//component composition
const HeadingComponent = () => (
    <div id="container">
        <Title/>
        <h2 className="heading">Namaste React Functional Component 🚀</h2>;
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);