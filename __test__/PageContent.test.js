import React from "react";
import { create } from "react-test-renderer";
import PageContent from "../src/components/pageContent";

describe("PageContent component", () => {
  test("it matches snapshot", () => {
    const component = create(<PageContent />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
