import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../components/Header";

//render,screen provided by "@testing-library/react";
//toBeInTheDocument() from "@testing-library/jest-dom"

it("Should render Header Component with Login", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const login = screen.getByRole("button");
  expect(login).toBeInTheDocument();
});

it("Should render Header Component with Cart 0 -items text", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartText = screen.getByText("Cart 0 items");
  expect(cartText).toBeInTheDocument();
});

it("Should render Header Component with Regex Cart text", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartText = screen.getByText(/Cart/); // just checks "Cart" text is there or no;
  expect(cartText).toBeInTheDocument();
});

it("Should check button login is rendered of multiple buttons", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginbtn = screen.getByRole("button", { name: "Login" });
  expect(loginbtn).toBeInTheDocument();
});

it("Should change Login button to Logout Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginbtn = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginbtn);

  const logout = screen.getByRole("button", { name: "Logout" });
  expect(logout).toBeInTheDocument();
});
