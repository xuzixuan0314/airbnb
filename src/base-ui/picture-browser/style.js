import styled from "styled-components";
const PictureBrowserWrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgb(33, 33, 33);
  opacity: 1;
  display: flex;
  flex-direction: column;
  .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
    }
  }
  .slider {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    overflow: hidden;
    .container {
      position: absolute;
      height: 100%;
      overflow: hidden;
      width: 100% !important;
      max-width: 105vh !important;
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
        object-fit: cover;
      }
    }
    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      display: flex;
      justify-content: space-between;
      bottom: 0;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
      }
    }
  }
  .preview {
    position: relative;
    box-sizing: border-box;
    height: 100px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    .info {
      max-width: 105vh;
      position: absolute;
      bottom: 10px;
      display: flex;
      flex-direction: column;
      .desc {
        display: flex;
        height: 30px;
        align-items: center;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        cursor: pointer;
      }
      .list {
        height: ${(props) => props.list_height};
        overflow: hidden;
        transition: height 200ms ease;
      }
      .item {
        position: relative;
        height: 100%;
        width: 20%;
        flex-shrink: 0;
        overflow: hidden;
        padding-right: 8px;
        cursor: pointer;
        &:last-child {
          padding-right: 0;
        }
        img {
          width: 100%;
          height: 100%;
        }
        .cover {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          background-color: rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
  /* 过渡动画 */
  .fade-enter {
    transform: translate(
      ${(props) => (props.next === "true" ? "100%" : "-100%")}
    );
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transform: translate(0);
    transition: all 150ms ease;
  }

  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: all 150ms ease;
  }
`;
export default PictureBrowserWrapper;
