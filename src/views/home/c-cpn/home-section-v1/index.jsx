import React, { memo } from "react";
/* 公共组件 */
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import PropTypes from "prop-types";
import HomeSectionV1Wrapper from "./style";
import SectionBottom from "@/components/section-bottom";
const HomeSectionV1 = memo((props) => {
  const { infoData } = props;
  return (
    <HomeSectionV1Wrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>
      <SectionRooms rooms={infoData?.list || []}></SectionRooms>
      <SectionBottom></SectionBottom>
    </HomeSectionV1Wrapper>
  );
});
HomeSectionV1.propTypes = {
  infoData: PropTypes.object.isRequired,
};
export default HomeSectionV1;
