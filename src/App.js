import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

/*
import React from "react";
import ReactDOM from "react-dom/client";

// pure react element
const header = React.createElement("h1", { id: "header" }, "REACT BODY");

// jsx -- babel converts it to react element
const jsx = <h1 id="header">Hello from JSX</h1>;

// jsx -- react component
const HeaderComponent = () => <h1>Header</h1>;
const BodyComponent = () => <div>Body</div>;
const FooterComponent = () => <h1>Footer</h1>;
const RootComponent = () => (
  <div>
    {
       header
     
    }  {jsx}
    <HeaderComponent />
    <BodyComponent />
    <FooterComponent />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootComponent />);
*/
