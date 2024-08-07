import React, { memo, useCallback, useEffect, useState } from "react";
/* 公共组件 */
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import PropTypes from "prop-types";
import HomeSectionV1Wrapper from "./style";
import SectionBottom from "@/components/section-bottom";
import SectionTabs from "@/components/section-tabs";
const HomeSectionV1 = memo((props) => {
  const { infoData } = props;
  //设置初始化的值

  const names = Object.keys(infoData.dest_list ?? {});
  const initName = names[0] ?? "";
  const [name, setName] = useState(initName);
  const changeTabs = useCallback((item) => {
    setName(item);
  }, []);
  // useEffect(() => {
  //   setName(initName);
  // }, [initName]);
  return (
    <HomeSectionV1Wrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>
      <SectionTabs list={names} changeTabs={changeTabs}></SectionTabs>
      <SectionRooms
        rooms={infoData?.dest_list?.[name]}
        width="33.33%"
      ></SectionRooms>

      <SectionBottom name={name}></SectionBottom>
    </HomeSectionV1Wrapper>
  );
});
HomeSectionV1.propTypes = {
  infoData: PropTypes.object,
};
export default HomeSectionV1;
