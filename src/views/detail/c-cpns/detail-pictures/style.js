import styled from "styled-components";
const DetailPicturesWrapper = styled.div`
  .inner {
    display: flex;
    position: relative;
    width: 100%;
    .top {
      width: 100%;
      height: 600px;
      display: flex;
      background-color: #000;
      .cover {
        opacity: 1 !important;
      }
      .item:hover {
        .cover {
          opacity: 0 !important;
        }
      }
    }
    .left,
    .right {
      width: 50%;
      height: 100%;
      flex-shrink: 0;
      .item {
        position: relative;
        .cover {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.2);
          opacity: 0;
          transition: opacity 200ms ease;
        }
        &:hover {
          img {
            transform: scale(1.1);
          }
        }
      }
      img {
        height: 100%;
        width: 100%;
        transition: transform 0.3s ease-in;
        object-fit: cover;
      }
    }
    .left {
      overflow: hidden;
      position: relative;
    }
    .right {
      display: flex;
      flex-wrap: wrap;
      .right-item {
        position: relative;
        width: 50%;
        height: 50%;
        box-sizing: border-box;
        overflow: hidden;
        border: 1px solid #000;
        .right-img {
          height: 100%;
          width: 100%;
        }
      }
    }
    .show-btn {
      position: absolute;
      z-index: 99;
      right: 15px;
      bottom: 15px;
      line-height: 22px;
      padding: 6px 15px;
      border-radius: 4px;
      background-color: #fff;
      cursor: pointer;
    }
  }
`;
export default DetailPicturesWrapper;
