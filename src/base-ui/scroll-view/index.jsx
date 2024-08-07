import React, { memo, useEffect, useRef, useState } from "react";
import ScrollViewWrapper from "./style";
import IconArrowLeft from "../assets/svg/icon-arrow-left";
import IconArrowRight from "../assets/svg/icon-arrow-right";
const ScrollView = memo((props) => {
  const [showLeft, setLeft] = useState(false);
  const [showRight, setRight] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const contentRef = useRef();
  const totalDistanceRef = useRef();
  //判断是否显示左右两边按钮
  useEffect(() => {
    // 1.首先滚动内容的宽度要大于区域的宽度
    //可滚动内容的宽度
    const scrollWidth = contentRef.current.scrollWidth;
    // 容器的宽度
    const clientWidth = contentRef.current.clientWidth;
    // 可滚动的距离,当可滚动的距离大于0的时候才显示右侧的按钮
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    setRight(totalDistance > 0);
  }, []);
  function controlClickHandle(isRight) {
    // 点击后应该位移到的元素的下标
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    // 获取该元素的偏移量
    const currentEl = contentRef.current.children[newIndex];
    const offset = currentEl.offsetLeft;
    contentRef.current.style.transform = `translate(${-offset}px)`;
    //修改当前下标
    setPosIndex(newIndex);
    //判断左右按钮显示与隐藏
    //当offset>0的时候显示左侧按钮
    setLeft(offset > 0);
    // 当offset>totalDistance的时候显示右侧按钮
    setRight(offset < totalDistanceRef.current);
  }
  return (
    <ScrollViewWrapper>
      {showLeft && (
        <div
          className="control left"
          onClick={(e) => controlClickHandle(false)}
        >
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div
          className="control right"
          onClick={(e) => controlClickHandle(true)}
        >
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={contentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

export default ScrollView;
