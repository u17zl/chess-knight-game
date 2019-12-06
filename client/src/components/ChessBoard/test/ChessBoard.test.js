import React wfrom "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import ChessBoard from "../ChessBoard";

import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

// mock component
const MockChessBoard = () => {
  const props = {
    position: [0, 1],
    target: [3, 1]
  };
  const sWrapper = shallow(<ChessBoard {...props} />);
  return {
    props,
    sWrapper
  };
};

it("can render without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<ChessBoard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("chess board test", () => {
  const { sWrapper } = MockChessBoard();

  it("get correct board", () => {
    expect(sWrapper.find("BoardTable").length).toBe(1);
    expect(sWrapper.find("ButtonGroup").length).toBe(1);
  });
});
