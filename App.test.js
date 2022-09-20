// import React from "react";
// import renderer from "react-test-renderer";

// import App from "./App";

// it("renders correctly", () => {
//   const tree = renderer.create(<App />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

import React from "react";
import { act, create } from "react-test-renderer";
import App from "./App";
import ErrorBoundary from "./src/components/ErrorBoundary";
jest.useFakeTimers();

describe("<App />", () => {
  it("renders the root without loading screen", () => {
    let tree;

    act(() => {
      tree = create(
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
