import React from "react";
import { ColorConsumer } from "../contexts/color.js";

const ColorBox = () => {
  return (
    // 문자열이 아닌 중괄호를 열어 함수를 넣고 파라미터 객체의 color를 가져와서 적용시켜줌
    <ColorConsumer>
      {value => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: value.state.color
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: value.state.subcolor
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
