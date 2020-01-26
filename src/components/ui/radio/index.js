import styled from 'styled-components';

export default styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ label {
    background: #bebebe;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
  }
  &:checked + label {
    background: #db7290;
    border: 1px solid #db7290;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: white;
    }
  }
`;
