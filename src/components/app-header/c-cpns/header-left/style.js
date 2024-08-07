import styled from "styled-components";
const HeaderLeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: start;
  .icon {
    color: ${(props) => props.theme.color.primaryColor};
  }
`;
export default HeaderLeftWrapper;
