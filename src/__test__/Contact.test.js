import Contact from "../components/Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Contact us page renders correctly", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});

test("Should have a submit button", () => {
  render(<Contact />);

  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});

test("Should have a input ", () => {
  render(<Contact />);

  const input = screen.getByPlaceholderText("name");
  expect(input).toBeInTheDocument();
});

test("Should have a input ", () => {
  render(<Contact />);

  const input = screen.getAllByRole("textbox");
  expect(input.length).toBe(2);
});