import React from "react";
import renderer from "react-test-renderer";

import Favourites from "../../src/screens/Favourites";

jest.useFakeTimers();

describe("<Favourites />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Favourites />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
