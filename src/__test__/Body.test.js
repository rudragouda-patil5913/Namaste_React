import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mock/mockResdata.json";
import { act } from "react";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render Body component with Search Pizza input text", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const searchbtn = screen.getByRole("button", { name: "Search" });
  expect(searchbtn).toBeInTheDocument();

  const searchInput = screen.getByTestId("search-input");

  fireEvent.change(searchInput, { target: { value: "pizza" } });

  fireEvent.click(searchbtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(4);
});

it("Should render Body Component with Search Cream input text", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBefore = screen.getAllByTestId("resCard");
  expect(cardsBefore.length).toBe(20);

  const searchbtn = screen.getByRole("button", { name: "Search" });
  expect(searchbtn).toBeInTheDocument();

  const searchInput = screen.getByTestId("search-input");
  fireEvent.change(searchInput, { target: { value: "cream" } });
  fireEvent.click(searchbtn);

  const cardsAfter = screen.getAllByTestId("resCard");
  expect(cardsAfter.length).toBe(2);
});

it("Should filter Top Rated retuarants on click", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBefore = screen.getAllByTestId("resCard");
  expect(cardsBefore.length).toBe(20);
  const toprated = screen.getByTestId("top-rated");
  fireEvent.click(toprated);

  const cardsAfter = screen.getAllByTestId("resCard");
  expect(cardsAfter.length).toBe(18);
});
