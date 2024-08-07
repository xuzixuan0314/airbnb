import React, { memo, useState } from "react";
import PictureBrowserWrapper from "./style";
import IconClose from "@/assets/svg/icon-close";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Indicator from "../Indicator";
const PictureBrowser = memo((props) => {
  const { pictureList, close } = props;
  const [isNext, setIsNext] = useState(true);
  const [showList, setShowList] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  function closeBtnClickHandle() {
    close && close();
  }
  function controlClickHandle(isNext) {
    let index = isNext ? currentIndex + 1 : currentIndex - 1;
    const length = pictureList.length;
    if (index >= length) {
      index = 0;
    } else if (index < 0) {
      index = length - 1;
    }
    setCurrentIndex(index);
    setIsNext(isNext);
  }
  function clickItem(index) {
    if (index < currentIndex) {
      setIsNext(false);
    } else {
      setIsNext(true);
    }
    setCurrentIndex(index);
  }
  return (
    <PictureBrowserWrapper
      next={isNext.toString()}
      list_height={showList ? "67px" : "0"}
    >
      <div className="top">
        <span className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </span>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={(e) => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={(e) => controlClickHandle(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="container">
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={pictureList[currentIndex]}
              timeout={150}
              classNames="fade"
            >
              <img src={pictureList[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div>24/30:room Aoartment图片24</div>
            <div onClick={() => setShowList(!showList)}>隐藏照片列表</div>
          </div>
          <div className="list">
            <Indicator currentIndex={currentIndex}>
              {pictureList.map((item, index) => {
                return (
                  <div
                    key={item}
                    className="item"
                    onClick={(e) => clickItem(index)}
                  >
                    {currentIndex === index ? (
                      ""
                    ) : (
                      <div className="cover"></div>
                    )}
                    <img alt="" src={item}></img>;
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowserWrapper>
  );
});

export default PictureBrowser;
