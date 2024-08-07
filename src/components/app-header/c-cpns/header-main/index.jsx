import React, { memo } from "react";
import HeaderMainWrapper from "./style";
import SearchIcon from "@/assets/svg/icon-search-bar";
const HeaderMain = memo(() => {
  return (
    <HeaderMainWrapper>
      <div className="search-bar">
        <div className="title">搜索房源和体验</div>
        <div className="icon-wrapper">
          <span className="icon">
            <SearchIcon></SearchIcon>
          </span>
        </div>
      </div>
    </HeaderMainWrapper>
  );
});

export default HeaderMain;
