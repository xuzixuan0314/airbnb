import React, { memo } from "react";
import HomeLongForWrapper from "./style";
import SectionHeader from "@/components/section-header";
import ScrollView from "@/base-ui/scroll-view";
import LongForItem from "@/components/longfor-item";
const HomeLongFor = memo((props) => {
  const { infoData } = props;
  return (
    <HomeLongForWrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>
      <ScrollView>
        {infoData.list?.map((item) => {
          return <LongForItem key={item.city} infoData={item}></LongForItem>;
        })}
      </ScrollView>
    </HomeLongForWrapper>
  );
});

export default HomeLongFor;
