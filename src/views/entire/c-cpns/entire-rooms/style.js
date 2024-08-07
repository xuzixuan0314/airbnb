import styled from "styled-components";
const EntireRoomsWrapper = styled.div`
  box-sizing: border-box;
  padding: 30px 16px;
  .list {
    display: flex;
    flex-wrap: wrap;
  }
  .cover-bg {
    position: absolute;
    z-index: 99;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
export default EntireRoomsWrapper;
