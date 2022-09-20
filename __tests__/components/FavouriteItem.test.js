import React from "react";
import renderer from "react-test-renderer";

import FavouriteItem from "../../src/components/FavouriteItem";

jest.useFakeTimers();

describe("<FavouriteItem />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <FavouriteItem
          item={{ name: "Cat", image: { url: "https://www.google.com" } }}
          onPress={jest.fn()}
          fill={"#FFFFFF"}
          stroke={"#FFFFFF"}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
