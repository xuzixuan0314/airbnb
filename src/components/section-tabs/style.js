import styled from "styled-components";
const SectionTabsWrapper = styled.div`
  .item {
    box-sizing: border-box;
    flex-basis: 120px;
    flex-shrink: 0;
    text-align: center;
    background-color: #fff;
    border: 0.5px solid #d8d8d8;
    margin-right: 16px;
    padding: 14px 16px;
    white-space: nowrap;
    border-radius: 3px;

    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow};
    &.active {
      color: #fff;
      background-color: ${(props) => props.theme.color.secondaryColor};
    }
  }
  &:last-child {
    margin-right: 0;
  }
`;
export default SectionTabsWrapper;
