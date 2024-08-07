import * as Constants from "./constants";
import { api_getEntireRoomList } from "@/Api/entire";
export const updateRoomsAction = (rooms) => {
  return {
    type: Constants.UPDATE_ROOMS,
    rooms,
  };
};
export const updateTotalCountAction = (totalCount) => {
  return {
    type: Constants.UPDATE_TOTALCOUNT,
    totalCount,
  };
};
export const updateCurrentPageAction = (currentPage) => {
  return {
    type: Constants.UPDATE_CURRENTPAGE,
    currentPage,
  };
};
export const updateLoadingAction = (isLoading) => {
  return {
    type: Constants.UPDATE_LOADING,
    isLoading,
  };
};
export const fetchGetRoomsAction = (currentPage = 1) => {
  return (dispatch) => {
    const offset = (currentPage - 1) * 20;
    dispatch(updateLoadingAction(true));
    api_getEntireRoomList(offset, 20).then((res) => {
      dispatch(updateRoomsAction(res.list));
      dispatch(updateTotalCountAction(res.totalCount));
      dispatch(updateCurrentPageAction(currentPage));
      dispatch(updateLoadingAction(false));

      console.log(res, "res.....");
    });
  };
};
