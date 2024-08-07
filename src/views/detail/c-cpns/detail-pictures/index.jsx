import React, { memo, useCallback } from "react";
import DetailPicturesWrapper from "./style";
import PropTypes from "prop-types";
import { useState } from "react";
import PictureBrowser from "@/base-ui/picture-browser";
const DetailPictures = memo((props) => {
  const { pictureList } = props;
  const [showBrowser, setShowBrowser] = useState(false);

  function showBrowserHandle() {
    setShowBrowser(true);
  }
  const handleCloseClick = useCallback(() => {
    setShowBrowser(false);
  }, []);
  return (
    <DetailPicturesWrapper>
      <div className="inner">
        <div className="top">
          <div className="left">
            <div className="item">
              <div className="cover"></div>
              <img src={pictureList[0]} alt="" />
            </div>
          </div>
          <div className="right">
            {pictureList.slice(1, 5).map((item) => (
              <div className="right-item item" key={item}>
                <div className="cover"></div>
                <img src={item} alt="" className="right-img"></img>
              </div>
            ))}
          </div>
        </div>
        <div className="show-btn" onClick={showBrowserHandle}>
          查看照片
        </div>
      </div>
      {showBrowser && (
        <PictureBrowser pictureList={pictureList} close={handleCloseClick} />
      )}
    </DetailPicturesWrapper>
  );
});
DetailPictures.propTypes = {
  pictureList: PropTypes.array.isRequired,
};
export default DetailPictures;
