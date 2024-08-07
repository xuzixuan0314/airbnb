import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import DetailWrapper from "./style";
import DetailPictures from "./c-cpns/detail-pictures";
const Detail = memo(() => {
  const { detailData } = useSelector(
    (state) => ({
      detailData: state.detail.detailData,
    }),
    shallowEqual
  );
  console.log(detailData, "detailData...");
  return (
    <DetailWrapper>
      {detailData.picture_url && (
        <DetailPictures pictureList={detailData.picture_urls}></DetailPictures>
      )}
    </DetailWrapper>
  );
});

export default Detail;
