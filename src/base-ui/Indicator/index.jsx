import React, { memo, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import IndicatorWrapper from "./style";
const Indicator = memo((props) => {
  // 将change事件修改为监听传入进来的下标
  const { currentIndex, children } = props;
  const innerRef = useRef();
  useEffect(() => {
    // 计算偏移量
    const currentEl = innerRef.current.children[currentIndex];
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
  }, [currentIndex]);

  return (
    <IndicatorWrapper>
      <div className="inner" ref={innerRef}>
        {children}
      </div>
    </IndicatorWrapper>
  );
});
Indicator.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  children: PropTypes.array,
};
export default Indicator;
