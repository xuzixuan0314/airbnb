import React, { memo, useRef, useState } from "react";
import DemoV1Wrapper from "./style";
const DemoV1 = memo((props) => {
  // 将change事件修改为监听传入进来的下标
  const names = [1, 2, 3, 4, 5, 6, 7, 8];
  const innerRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  function changeItem(isNext) {
    let index = isNext ? currentIndex + 1 : currentIndex - 1;
    const length = names.length;
    if (index >= length) {
      index = 0;
    } else if (index < 0) {
      index = length - 1;
    }
    setCurrentIndex(index);
    console.log(index, "currentIndex");
    // 计算偏移量
    const currentEl = innerRef.current.children[index];
    const itemWidth = currentEl.clientWidth;
    const clientWidth = innerRef.current.clientWidth;
    const scrollWidth = innerRef.current.scrollWidth;
    const offsetLeft = currentEl.offsetLeft;
    // 总位移量
    const totalDistance = scrollWidth - clientWidth;
    // 偏移量
    let distance = offsetLeft + itemWidth * 0.5 - clientWidth * 0.5;
    // 当distance小0的时候不需要进行位移
    // 当distance大于0的时候 需要向左位移distance
    if (distance < 0) distance = 0;
    //当distance的距离大于总共能位移的距离的时候,就将distance设置为totalDistance
    //直到循环到-值位置
    if (distance > totalDistance) distance = totalDistance;
    innerRef.current.style.transform = `translateX(${-distance}px)`;
  }
  return (
    <DemoV1Wrapper>
      <div className="control">
        <button onClick={(e) => changeItem(false)}>上一个</button>
        <button onClick={(e) => changeItem(true)}>下一个</button>
      </div>
      <div className="inner" ref={innerRef}>
        {names.map((item) => {
          return (
            <button key={item} className="item">
              {item}
            </button>
          );
        })}
      </div>

      {/* <div className="inner" ref={innerRef}>{props.children}</div> */}
    </DemoV1Wrapper>
  );
});

export default DemoV1;
