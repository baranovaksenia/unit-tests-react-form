import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import Home from "./../Home";

afterEach(cleanup);

test("renders Welcome", () => {
  const { asFragment } = render(<Home name="MUshi" />);
  expect(asFragment()).toMatchSnapshot();
});
test("form rendered,", () => {
  render(<Home />);
  const linkElement = screen.queryByTestId("form");
  expect(linkElement).toBeInTheDocument();
});

describe("Form render", () => {
  test("Submit changes to true", () => {
    const component = renderer.create(<Home />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.handleSubmit;
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test("submit form", () => {
  const { getByText, getByLabelText } = render(<Home name="" />);

  getByText("Welcome!");
  getByLabelText("Enter your name:");
  getByLabelText("Enter your age:");
  getByLabelText("Enter your favorite animal:");
  const inputName = getByLabelText("Enter your name:");
  fireEvent.change(inputName, { target: { value: "Alisa" } });
  const inputAge = getByLabelText("Enter your age:");
  fireEvent.change(inputAge, { target: { value: "29" } });
  const animal = getByLabelText("Enter your favorite animal:");
  fireEvent.change(animal, { target: { value: "Dog" } });
  fireEvent.click(getByText("Submit"));

  getByText("Welcome! Alisa");
  getByText("You are 29 years old.");
  getByText("Your favorite animal is Dog.");
});
