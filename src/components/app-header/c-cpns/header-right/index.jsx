import React, { memo, useEffect, useState } from "react";
import HeaderRightWrapper from "./style";
import IconGlobal from "@/assets/svg/icon_global";
import IconAvatar from "@/assets/svg/icon_avatar";
import IconMenu from "@/assets/svg/icon_menu";
const HeaderRight = memo(() => {
  const [isShowPanel, setShowPanel] = useState(false);
  useEffect(() => {
    const clickFun = (e) => {
      setShowPanel(false);
    };
    window.addEventListener("click", clickFun, true);
    return () => {
      window.removeEventListener("click", clickFun);
    };
  }, []);
  const handlePanelClick = () => {
    setShowPanel(true);
  };
  return (
    <HeaderRightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal></IconGlobal>
        </span>
      </div>

      <div className="avatar-box" onClick={handlePanelClick}>
        <IconMenu></IconMenu>
        <IconAvatar></IconAvatar>
        {isShowPanel && (
          <div className="panel">
            <div className="item">注册</div>
            <div className="item">登录</div>
            <div className="line"></div>
            <div className="item">出租房源</div>
            <div className="item">开展体验</div>
            <div className="item">帮助</div>
          </div>
        )}
      </div>
      <div></div>
    </HeaderRightWrapper>
  );
});

export default HeaderRight;
