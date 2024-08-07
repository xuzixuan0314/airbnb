import React, { memo, useRef, useState } from "react";
import classNames from "class-names";
import { Carousel } from "antd";
import Rating from "@mui/material/Rating";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/Indicator";
import ItemWrapper from "./style";

const SectionItem = memo((props) => {
  const { itemData, width, clickItem } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef();
  function changeImg(isNext) {
    if (isNext) {
      bannerRef.current.next();
    } else {
      bannerRef.current.prev();
    }
    let index = isNext ? currentIndex + 1 : currentIndex - 1;
    const length = itemData.picture_urls.length;
    if (index >= length) {
      index = 0;
    } else if (index < 0) {
      index = length - 1;
    }
    setCurrentIndex(index);
  }
  function handleClick() {
    clickItem && clickItem();
  }
  return (
    <ItemWrapper
      item_width={width || "25%"}
      verify_color={itemData?.verify_info?.text_color || "#39576a"}
    >
      <div className="inner" onClick={handleClick}>
        <div className="slider">
          <div className="control">
            <div className="arrow left" onClick={(e) => changeImg(false)}>
              <IconArrowLeft width="24" height="24" />
            </div>
            <div className="arrow right" onClick={(e) => changeImg(true)}>
              <IconArrowRight width="24" height="24" />
            </div>
          </div>
          <Carousel ref={bannerRef} dots={false}>
            {itemData.picture_urls.map((item) => {
              return (
                <div className="cover" key={item}>
                  <img src={item} alt="" />
                </div>
              );
            })}
          </Carousel>
          <div className="indicator">
            <Indicator currentIndex={currentIndex}>
              {itemData.picture_urls.map((item, index) => {
                return (
                  <div className="item" key={item}>
                    <span
                      className={classNames("dot", {
                        active: currentIndex === index,
                      })}
                    ></span>
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>

        {/* <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div> */}
        <div className="desc">{itemData.verify_info.messages?.join("·")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">{itemData.price_format}</div>
        <div className="bottom">
          <Rating
            name="size-small"
            readOnly
            value={itemData.reviews_count}
            sx={{
              fontSize: "12px",
              color: itemData.star_rating_color || "#00848A",
              marginRight: "-1px",
            }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

export default SectionItem;
