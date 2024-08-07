import React, { memo, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import EntireWrapper from "./styled";
import EntireFilter from "./c-cpns/entire-filter";
import EntireRooms from "./c-cpns/entire-rooms";
import { fetchGetRoomsAction } from "@/store/features/entire/actionCreators";
import EntirePagination from "./c-cpns/entire-pagination";
const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetRoomsAction());
  }, [dispatch]);
  return (
    <EntireWrapper>
      <EntireFilter></EntireFilter>
      <EntireRooms></EntireRooms>
      <EntirePagination></EntirePagination>
    </EntireWrapper>
  );
});

export default Entire;
