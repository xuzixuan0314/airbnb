import React, { memo } from "react";
import HeaderLeft from "./c-cpns/header-left";
import HeaderMain from "./c-cpns/header-main";
import HeaderRight from "./c-cpns/header-right";
import HeaderWrapper from "./c-cpns/style";
const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <div className="header-wrapper">
        <HeaderLeft></HeaderLeft>
        <HeaderMain></HeaderMain>
        <HeaderRight></HeaderRight>
      </div>
    </HeaderWrapper>
  );
});

export default AppHeader;
