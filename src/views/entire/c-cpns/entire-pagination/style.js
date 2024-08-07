import styled from "styled-components";
const EntirePaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  .content {
    text-align: center;
  }
  .info {
    margin-top: 20px;
  }
  .MuiPaginationItem-page.Mui-selected {
    background-color: #000 !important;
    color: #fff;
    &:hover {
      background-color: #222;
    }
  }
  .MuiPaginationItem-icon {
    font-size: 20px;
  }
  .MuiPaginationItem-page {
    margin: 0 9px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
export default EntirePaginationWrapper;
