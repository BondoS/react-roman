import styled from 'styled-components';

export default styled.input`
  border-bottom: 1px solid #bebebe;
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  font-size: 2rem;
  &:focus:hover,
  &:focus {
    border-bottom: 1px solid green;
  }
  &:hover {
    border-bottom: 1px solid #6c757d;
  }
`;
