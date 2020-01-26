import styled from 'styled-components';

export default styled.div`
  margin: 20px auto 10px;
  width: 90%;
  border: 1px solid rgb(205, 208, 210);
  padding: 15px 1%;
  border-radius: 15px;
  @media (min-width: 769px) {
    width: 60%;
  }

  & .romanOuter {
    display: table;
    margin: auto;
  }
  & .resultRomanContainer {
    font-size: 1.8rem;
    border-bottom: 1px solid #bebebe;
  }
  & .resultDecimal {
    float: right;
    font-size: 0.8rem;
  }
  & .errMsg {
    color: #dc3545;
  }
  & .resultRomanLabel {
  }
  & .resultRomanValue {
  }
`;
