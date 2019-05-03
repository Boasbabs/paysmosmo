import React from "react";
import { create } from "react-test-renderer";
import PageFooter from "../src/components/pageFooter";

describe("PageFooter component", () => {
  test("matches its snapshot", () => {
    const component = create(<PageFooter />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
