import styled from "styled-components";
const SectionBottomWrapper = styled.div`
  .info {
    cursor: pointer;
    display: flex;
    align-items: center;
    .text {
      margin-right: 10px;
      color: ${(props) => props.item_color};
      font-weight: 600;
      font-size: 17px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;
export default SectionBottomWrapper;
