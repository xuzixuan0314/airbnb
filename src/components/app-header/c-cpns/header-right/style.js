import styled from "styled-components";
const HeaderRightWrapper = styled.div`
  flex: 1;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .btns {
    display: flex;
    align-items: center;
    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 22px;
      color: ${(props) => props.theme.text.primaryColor};
      cursor: pointer;
      font-weight: 600;
      &:hover {
        background-color: ${(props) => props.theme.color.hoverColor};
      }
    }
  }
  .icon_global {
  }
  .avatar-box {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}
    .panel {
      position: absolute;
      right: 0;
      top: 52px;
      width: 240px;
      padding: 12px 0;
      border-radius: 8px;
      background-color: ${(props) => props.theme.color.bgColor};
      box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.18);
      color: ${(props) => props.theme.text.primaryColor};
      .item {
        height: 40px;
        line-height: 40px;
        padding: 0 16px;
        &:hover {
          background-color: ${(props) => props.theme.color.hoverColor};
        }
      }
      .line {
        height: 1px;
        background-color: ${(props) => props.theme.color.lineColor};
      }
    }
  }
`;
export default HeaderRightWrapper;
