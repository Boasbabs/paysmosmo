import React from "react";
import Enzyme, { render, shallow } from "enzyme";
import enzymeAdapterReact16 from "enzyme-adapter-react-16";
import ProductSegment from "../src/components/productSegment";

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const getDefaultProps = () => ({});

describe("ProductSegment component", () => {
  it("it matches snapshot", () => {
    const {} = getDefaultProps();
    const wrapper = render(<ProductSegment />);
    expect(wrapper).toMatchSnapshot();
  });
});