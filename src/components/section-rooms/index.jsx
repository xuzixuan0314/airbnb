import React, { memo } from "react";
import PropTypes from "prop-types";
import RoomItem from "../room-item";
import RoomsWrapper from "./style";
const SectionRooms = memo((props) => {
  const { rooms, width = "25%" } = props;
  return (
    <RoomsWrapper>
      <div className="rooms">
        {rooms.slice(0, 8).map((item) => (
          <RoomItem width={width} key={item.id} itemData={item}></RoomItem>
        ))}
      </div>
    </RoomsWrapper>
  );
});
SectionRooms.propTypes = {
  rooms: PropTypes.array.isRequired,
};
export default SectionRooms;
