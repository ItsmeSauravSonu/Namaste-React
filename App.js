const parent = React.createElement("div",{id:"parent"},
[
React.createElement("h1",{id:"child"},"I am child1"),
React.createElement("h2",{id:"child"},"I am child2")
])

//JSX

const heading = React.createElement("h1",{ id:"heading"}, "Hello world from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //object