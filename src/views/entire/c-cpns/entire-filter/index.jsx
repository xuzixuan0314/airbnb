import React, { memo, useState } from "react";
import classNames from "class-names";
import EntireFilterWrapper from "./style";
import filterData from "@/assets/data/filter_data.json";

const EntireFilter = memo(() => {
  const [selectedList, setSelected] = useState([]);

  function selectItem(item) {
    const list = [...selectedList];
    const index = selectedList.indexOf(item);
    if (index !== -1) {
      list.splice(index, 1);
    } else {
      list.push(item);
    }
    setSelected(list);
  }
  return (
    <EntireFilterWrapper>
      {filterData.map((item) => {
        return (
          <div
            className={classNames("item", {
              active: selectedList.includes(item),
            })}
            key={item}
            onClick={(e) => selectItem(item)}
          >
            {item}
          </div>
        );
      })}
    </EntireFilterWrapper>
  );
});

export default EntireFilter;
