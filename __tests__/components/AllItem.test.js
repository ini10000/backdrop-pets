import React from "react";
import renderer from "react-test-renderer";

import AllItem from "../../src/components/AllItem";

jest.useFakeTimers();

describe("<AllItem />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <AllItem
          item={{ name: 'Cat', image: {url: 'https://www.google.com'} }}
          onPress={jest.fn()}
          fill={"#FFFFFF"}
          stroke={"#FFFFFF"}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
