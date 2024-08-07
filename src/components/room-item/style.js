import styled from "styled-components";
const ItemWrapper = styled.div`
  width: ${(props) => props.item_width};
  box-sizing: border-box;
  padding: 8px;
  flex-shrink: 0;
  .inner {
    width: 100%;
    .slider {
      position: relative;
      cursor: pointer;
      .control {
        opacity: 0;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 1;
        color: #fff;
        transition: opacity 200ms ease;

        cursor: pointer;
        .arrow {
          width: 83px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          &.left {
            background: linear-gradient(
              to left,
              transparent 0%,
              rgba(0, 0, 0, 0.25) 100%
            );
          }
          &.right {
            background: linear-gradient(
              to right,
              transparent 0%,
              rgba(0, 0, 0, 0.25) 100%
            );
          }
        }
      }
      &:hover {
        .control {
          opacity: 1;
        }
      }
    }
    .cover {
      padding: 66.66% 0 0;
      position: relative;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
    .indicator {
      position: absolute;
      bottom: 10%;
      left: 50%;
      width: 30%;
      transform: translateX(-50%);
      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        flex-shrink: 0;
        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;

          &.active {
            width: 8px;
            height: 8px;
          }
        }
      }
    }
    .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color: ${(props) => props.verify_color};
    }
    .name {
      font-size: 16px;
      font-weight: 700;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .price {
      margin: 8px 0;
    }
    .bottom {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 600;
      color: ${(props) => props.theme.text.primaryColor};
    }
  }
`;
export default ItemWrapper;
