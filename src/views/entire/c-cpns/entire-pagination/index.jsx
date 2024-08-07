import React, { memo, useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";

import EntirePaginationWrapper from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchGetRoomsAction } from "@/store/features/entire/actionCreators";
const EntirePagination = memo((props) => {
  const [totalPage, setTotalPage] = useState(0);
  const dispatch = useDispatch();
  const { totalCount, currentPage } = useSelector((state) => {
    return {
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
    };
  }, shallowEqual);
  useEffect(() => {
    const total = Math.ceil(totalCount / 20);
    setTotalPage(total);
  }, [totalCount]);
  const start = (currentPage - 1) * 20 + 1;
  const end = currentPage * 20;
  function changePagination(e, page) {
    window.scrollTo(0, 0);
    dispatch(fetchGetRoomsAction(page));
  }

  return (
    <EntirePaginationWrapper>
      <div className="content">
        <Pagination
          onChange={changePagination}
          className="pagination"
          count={totalPage}
          color="primary"
        />
        <div className="info">
          第{start + " - " + end}个房源,共超
          {totalCount}个
        </div>
      </div>
    </EntirePaginationWrapper>
  );
});

export default EntirePagination;
