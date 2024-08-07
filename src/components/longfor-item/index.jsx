import React, { memo } from "react";
import LongForItemWrapper from "./style";
const LongForItem = memo((props) => {
  const { infoData, width = "20%" } = props;
  return (
    <LongForItemWrapper width={width}>
      <div className="inner">
        <div className="item-info">
          <img src={infoData.picture_url} alt="" />
          <div className="bg-cover"></div>
          <div className="price-info">
            <div className="name">{infoData.city}</div>
            <div className="price">均价 {infoData.price}</div>
          </div>
        </div>
      </div>
    </LongForItemWrapper>
  );
});

export default LongForItem;
