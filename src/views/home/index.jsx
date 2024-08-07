import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
/* redux相关 */
import { fetchHomeData } from "@/store/features/home";
/* 样式组件 */
import HomeWrapper from "./style";
/* 局部组件 */
import Banner from "./c-cpn/home-banner";
/* 公共组件 */
import HomeSectionV1 from "./c-cpn/home-section-v1";
import HomeSectionV2 from "./c-cpn/home-section-v2";
import HomeSectionV3 from "./c-cpn/home-section-v3";

import { isEmptyO } from "@/utils";
import HomeLongFor from "./c-cpn/home-long-for";

const Home = memo(() => {
  const {
    goodPriceInfo,
    highScoreData,
    discountData,
    hotData,
    longForData,
    plusData,
  } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreData: state.home.highScoreData,
    discountData: state.home.discountData,
    hotData: state.home.hotData,
    longForData: state.home.longForData,
    plusData: state.home.plusData,
  }));
  const dispatch = useDispatch();
  /* 获取列表数据 */
  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);
  return (
    <HomeWrapper>
      <Banner></Banner>
      <div className="content">
        {isEmptyO(plusData) && (
          <HomeSectionV3 infoData={plusData}></HomeSectionV3>
        )}
        {isEmptyO(longForData) && (
          <HomeLongFor infoData={longForData}></HomeLongFor>
        )}
        {isEmptyO(discountData) && (
          <HomeSectionV2 infoData={discountData}></HomeSectionV2>
        )}
        {isEmptyO(hotData) && (
          <HomeSectionV2 infoData={hotData}></HomeSectionV2>
        )}
        {isEmptyO(goodPriceInfo) && (
          <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
        )}
        {isEmptyO(highScoreData) && (
          <HomeSectionV1 infoData={highScoreData}></HomeSectionV1>
        )}
      </div>
    </HomeWrapper>
  );
});
export default Home;
