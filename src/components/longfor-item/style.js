import styled from "styled-components";
const LongForItemWrapper = styled.div`
  width: ${(props) => props.width};
  flex-shrink: 0;
  .inner {
    padding: 8px;
    .item-info {
      position: relative;
      border-radius: 4px;
      overflow: hidden;
      & > img {
        width: 100%;
        user-select: none;
      }
    }
    .bg-cover {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 60%;
      background: linear-gradient(
        -180deg,
        rgba(0, 0, 0, 0) 3%,
        rgb(0, 0, 0) 100%
      );
    }
    .price-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      .name {
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 6px;
      }
    }
  }
`;
export default LongForItemWrapper;
