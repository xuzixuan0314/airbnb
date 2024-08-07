import React, { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RoomItem from "@/components/room-item";
import EntireRoomsWrapper from "./style";
import { updateDetailAction } from "@/store/features/detail";
const EntireRooms = memo(() => {
  const { rooms, isLoading } = useSelector((state) => ({
    rooms: state.entire.rooms,
    isLoading: state.entire.isLoading,
  }));
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const clickItem = useCallback(
    (item) => {
      dispatch(updateDetailAction(item));

      navigator(`/detail`);
    },
    [navigator, dispatch]
  );
  console.log(rooms, "rooms....");
  return (
    <EntireRoomsWrapper>
      <div className="list">
        {rooms.map((item) => {
          return (
            <RoomItem
              clickItem={(e) => clickItem(item)}
              key={item._id}
              itemData={item}
              width="20%"
            ></RoomItem>
          );
        })}
      </div>
      {isLoading && <div className="cover-bg"></div>}
    </EntireRoomsWrapper>
  );
});

export default EntireRooms;
