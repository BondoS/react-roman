import styled from 'styled-components';

const btnBorder = type => {
  switch (type) {
    default:
      return '1px solid #bebebe';
  }
};

export default styled.button`
  border: ${props => btnBorder(props.btnStyle)};
`;
