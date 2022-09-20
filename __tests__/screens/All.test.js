import React from "react";
import renderer from "react-test-renderer";
import ErrorBoundary from "../../src/components/ErrorBoundary";

import All from "../../src/screens/All";

jest.useFakeTimers();

describe("<All />", () => {
  it("renders correctly", () => {
    let tree;
    renderer.act(
      () =>
        (tree = renderer
          .create(
            <ErrorBoundary>
              <All />
            </ErrorBoundary>
          )
          .toJSON())
    );
    expect(tree).toMatchSnapshot();
  });
});
