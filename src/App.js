import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense, useEffect, useState } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const name = "Prashanth"
    setUserName(name);
  }, []);

  return (
    <>
      <UserContext.Provider value={{loggedInUser: userName}}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />{" "}
          </Suspense>
        ),
      },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout />);

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
