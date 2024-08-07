import React, { memo } from "react";
import SectionBottomWrapper from "./style";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const SectionBottom = memo((props) => {
  const { name } = props;
  const showNames = name ? `显示更多${name}房源` : "查看更多";
  const navigate = useNavigate();
  function moreClickHandle() {
    navigate("/entire");
  }
  return (
    <SectionBottomWrapper item_color={name ? "#00848A" : "#000"}>
      <div className="info" onClick={moreClickHandle}>
        <span className="text">{showNames}</span>
        <IconMoreArrow />
      </div>
    </SectionBottomWrapper>
  );
});
SectionBottom.propTypes = {
  name: PropTypes.string,
};
export default SectionBottom;
