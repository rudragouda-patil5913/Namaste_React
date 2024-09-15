import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import RestuarantMenu from "../components/RestuarantMenu";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import CartItems from "../components/CartItems";
import { act } from "react";
import MOCK_DATA from "../mock/CartItems.json";
import "@testing-library/jest-dom";
import appStore from "../utils/appStore";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render Accordions with cart 1 items", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestuarantMenu />
          <CartItems />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Veg Pizza (14)");
  expect(accordionHeader).toBeInTheDocument();

  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItem").length).toBe(14);

  const accHeader = screen.getByText("Non Veg Pizza (12)");
  expect(accHeader).toBeInTheDocument();
  fireEvent.click(accHeader);

  const addbtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addbtns[0]);
  expect(screen.getByText("Cart 1 items")).toBeInTheDocument();
  fireEvent.click(addbtns[0]);
  expect(screen.getByText("Cart 2 items")).toBeInTheDocument();
});

it("Should render cart 2 items on click of twice", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestuarantMenu />
          <CartItems />
        </Provider>
      </BrowserRouter>
    );
  });

  const accHeader = screen.getByText("Veg Pizza (14)");
  expect(accHeader).toBeInTheDocument();
  fireEvent.click(accHeader);
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart 3 items")).toBeInTheDocument();
  //    await waitFor(() => {
  //      expect(screen.getByText("Cart 1 items")).toBeInTheDocument();
  //    });
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart 4 items")).toBeInTheDocument();

  //   await waitFor(() => {
  //     expect(screen.getByText("Cart 2 items")).toBeInTheDocument();
  //   });
});
