import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  api_getHomeGoodPriceData,
  api_getHomeHighScoreData,
  api_getHomeDiscountData,
  api_getHomeHotRecommendData,
  api_getHomePlusData,
  api_getHomeLongforData,
} from "@/Api/home";
export const fetchHomeData = createAsyncThunk(
  "fetchHomeData",
  async (payload, { dispatch }) => {
    // 获取高性价比房源数据
    api_getHomeGoodPriceData().then((res) => {
      dispatch(updateGoodPriceInfoAction(res));
    });
    // 获取高分数据
    api_getHomeHighScoreData().then((res) => {
      dispatch(updateHighScoreData(res));
    });
    // 获取折扣数据
    api_getHomeDiscountData().then((res) => {
      dispatch(updateDiscountData(res));
    });
    // 获取热门房源
    api_getHomeHotRecommendData().then((res) => {
      dispatch(updateHotData(res));
    });
    // 获取向往的数据
    api_getHomeLongforData().then((res) => {
      console.log(res, "向往");
      dispatch(updateLongforData(res));
    });
    // 获取Plus数据
    api_getHomePlusData().then((res) => {
      console.log(res, "plus");
      dispatch(updatePlusData(res));
    });
  }
);
const HomeReducer = createSlice({
  name: "HomeReducer",
  initialState: {
    goodPriceInfo: {},
    highScoreData: {},
    discountData: {},
    hotData: {},
    plusData: {},
    longForData: {},
  },
  reducers: {
    updateGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    updateHighScoreData(state, { payload }) {
      state.highScoreData = payload;
    },
    updateDiscountData(state, { payload }) {
      state.discountData = payload;
    },
    updateHotData(state, { payload }) {
      state.hotData = payload;
    },
    updatePlusData(state, { payload }) {
      state.plusData = payload;
    },
    updateLongforData(state, { payload }) {
      state.longForData = payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeData.fulfilled, (state, { payload }) => {
  //     state.goodPriceInfo = payload;
  //   });
  // },
});
export const {
  updateGoodPriceInfoAction,
  updateHighScoreData,
  updateDiscountData,
  updateHotData,
  updateLongforData,
  updatePlusData,
} = HomeReducer.actions;
export default HomeReducer.reducer;
