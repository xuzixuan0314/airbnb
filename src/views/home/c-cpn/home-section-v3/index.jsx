import React, { memo } from "react";
/* 公共组件 */
import SectionHeader from "@/components/section-header";
import PropTypes from "prop-types";
import HomeSectionV1Wrapper from "./style";
import SectionBottom from "@/components/section-bottom";
import ScrollView from "@/base-ui/scroll-view";
import RoomItem from "@/components/room-item";
const HomeSectionV1 = memo((props) => {
  const { infoData } = props;
  //设置初始化的值

  return (
    <HomeSectionV1Wrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>
      <ScrollView>
        {infoData.list.map((item) => {
          return (
            <RoomItem key={item.id} itemData={item} width="20%"></RoomItem>
          );
        })}
      </ScrollView>
      <SectionBottom name="Plus"></SectionBottom>
    </HomeSectionV1Wrapper>
  );
});
HomeSectionV1.propTypes = {
  infoData: PropTypes.object,
};
export default HomeSectionV1;
