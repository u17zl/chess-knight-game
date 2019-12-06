import React from "react";
import Enzyme, { shallow } from "enzyme";
import { ButtonGroup } from "../components";

import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

// mock component
const MockButtonGroup = () => {
  const props = {
    position: [0, 1],
    target: [3, 1]
  };
  const sWrapper = shallow(<ButtonGroup {...props} />);
  return {
    props,
    sWrapper
  };
};

describe("button group test", () => {
  const { sWrapper } = MockButtonGroup();

  it("get correct button", () => {
    expect(sWrapper.find("button").length).toBe(2);
  });
});
