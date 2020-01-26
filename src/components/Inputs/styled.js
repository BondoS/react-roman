import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-around;
  & .inputContain {
    width: 45%;
    margin: auto;
    display: inline-block;
  }
  & .inputDecimal {
    float: right;
  }
  & .inputErr {
    float: left;
    color: #dc3545;
  }
`;
