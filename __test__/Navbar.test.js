import React from "react";
import Enzyme, { render, shallow } from "enzyme";
import enzymeAdapterReact16 from "enzyme-adapter-react-16";
import Navbar from "../src/components/navbar";


Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const getDefaultProps = () => ({});

describe("Navbar component", () => {
  it("matches its snapshot", () => {
    const {} = getDefaultProps();
    const wrapper = render(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });
});
