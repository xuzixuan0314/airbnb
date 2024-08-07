import React, { memo } from "react";
import DemoV1 from "./c-cmp/index";
import DotCmpWrapper from "./style";
const DotDemo = memo(() => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <DotCmpWrapper>
      <DemoV1>
        {list.map((item) => {
          return (
            <div className="item" key={item}>
              {item}
            </div>
          );
        })}
      </DemoV1>
    </DotCmpWrapper>
  );
});

export default DotDemo;
