import React from "react";
import renderer from "react-test-renderer";

import All from "../../src/screens/All";

jest.useFakeTimers();

describe("<All />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<All />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
