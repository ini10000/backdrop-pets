import React from "react";
import { act, create } from "react-test-renderer";

import All from "../../src/screens/All";
import ErrorBoundary from "../../src/components/ErrorBoundary";

jest.useFakeTimers();

describe("<All />", () => {
  beforeEach(() => {
    fetch.doMock();
  });
  it("renders correctly", () => {
    let tree;

    act(() => {
      tree = create(<All />).toJSON();
    });

    setImmediate(() => {
      expect(tree).toMatchSnapshot();
      done();
    });
  });
});
