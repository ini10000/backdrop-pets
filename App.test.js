import React from "react";
import { act, create } from "react-test-renderer";
import App from "./App";

jest.useFakeTimers();

describe("<App />", () => {
  it("renders the root without loading screen", () => {
    let tree;

    act(() => {
      tree = create(<App />);
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
