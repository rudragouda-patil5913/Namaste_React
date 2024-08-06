import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Provider } from "react-redux";
import CartItems from "./components/CartItems";

// import RestuarantMenu from "./components/RestuarantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import appStore from "./utils/appStore";

const RestuarantMenu = lazy(() => import("./components/RestuarantMenu"));

const App = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restuarant/:resId",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <RestuarantMenu />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <CartItems />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
