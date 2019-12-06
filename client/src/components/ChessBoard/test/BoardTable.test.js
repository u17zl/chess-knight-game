import React from "react";
import Enzyme, { shallow } from "enzyme";
import { BoardTable } from "../components";

import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

// init board
var initBoard = new Array(8).fill(0);
for (var i = 0; i < initBoard.length; i++) {
  initBoard[i] = new Array(8).fill(0);
}
// mock component
const MockBoardTable = () => {
  const props = {
    position: [0, 1],
    target: [3, 1],
    board: initBoard
  };
  const sWrapper = shallow(<BoardTable {...props} />);
  return {
    props,
    sWrapper
  };
};

describe("board test", () => {
  const { sWrapper } = MockBoardTable();

  it("get correct board", () => {
    expect(sWrapper.find("td").length).toBe(64);
    expect(sWrapper.find("tr").length).toBe(8);
    expect(sWrapper.find("tbody").length).toBe(1);
    expect(sWrapper.find("table").length).toBe(1);
  });

  it("have correct class", () => {
    expect(sWrapper.find(".knight").length).toBe(1);
    expect(sWrapper.find(".target").length).toBe(1);
  });
});
