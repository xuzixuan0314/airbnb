import styled from "styled-components";
const HeaderMainWrapper = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  .search-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    padding: 0 10px 0 20px;
    border: 1px solid ${(props) => props.theme.color.lineColor};
    border-radius: 25px;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}

    .title {
      font-weight: 600;
    }
    .icon-wrapper {
      width: 30px;
      height: 30px;
      background-color: ${(props) => props.theme.color.primaryColor};
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.color.bgColor};
    }
  }
`;
export default HeaderMainWrapper;
