import React, { memo } from "react";
import HeaderLeftWrapper from "./style";
import IconLogo from "@/assets/svg/icon_logo";
const HeaderLeft = memo(() => {
  return (
    <HeaderLeftWrapper>
      <div className="icon">
        <IconLogo></IconLogo>
      </div>
    </HeaderLeftWrapper>
  );
});

export default HeaderLeft;
