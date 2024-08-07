import React, { memo, useState } from "react";
import SectionTabsWrapper from "./style";
import ScrollView from "@/base-ui/scroll-view";
import classNames from "class-names";
const SectionTabs = memo((props) => {
  const { list, changeTabs } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  function clickItem(item, index) {
    setCurrentIndex(index);
    if (changeTabs) changeTabs(item, index);
  }
  return (
    <SectionTabsWrapper>
      <ScrollView>
        {list.map((item, index) => {
          return (
            <div
              key={item}
              onClick={(e) => clickItem(item, index)}
              className={classNames("item", { active: currentIndex === index })}
            >
              {item}
            </div>
          );
        })}
      </ScrollView>
    </SectionTabsWrapper>
  );
});

export default SectionTabs;
