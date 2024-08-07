import styled from "styled-components";
const EntireFilterWrapper = styled.div`
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 80px;

  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 16px;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;
  .item {
    display: flex;
    flex-basis: 80px;
    flex-shrink: 0;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 10px;
    white-space: nowrap;

    margin: 0 4px 0 8px;
    border: 1px solid #dce0e0;
    border-radius: 4px;
    color: #484848;
    cursor: pointer;

    &.active {
      background: ${(props) => props.theme.color.secondaryColor};
      border: 1px solid ${(props) => props.theme.color.secondaryColor};
      color: #ffffff;
    }
  }
`;
export default EntireFilterWrapper;
