import * as Constants from "./constants";
const initState = {
  rooms: [],
  currentPage: 1,
  totalCount: 0,
};
const EntireReducer = (state = initState, actions) => {
  switch (actions.type) {
    case Constants.UPDATE_ROOMS:
      return {
        ...state,
        rooms: actions.rooms,
      };
    case Constants.UPDATE_TOTALCOUNT:
      return {
        ...state,
        totalCount: actions.totalCount,
      };
    case Constants.UPDATE_CURRENTPAGE:
      return {
        ...state,
        currentPage: actions.currentPage,
      };
    case Constants.UPDATE_LOADING:
      return {
        ...state,
        isLoading: actions.isLoading,
      };
    default:
      return state;
  }
};

export default EntireReducer;
