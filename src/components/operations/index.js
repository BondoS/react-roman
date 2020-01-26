import React from 'react';
import PropTypes from 'prop-types';
import Radio from '../ui/radio';
import Item from '../ui/radio/item';
import Label from '../ui/radio/label';
import Container from './styled';
import { operations } from '../main/initialState';

const Operations = ({ change, active }) => {
  return (
    <Container>
      {operations.map(operation => (
        <Item key={`operation-${operation}`}>
          <Radio
            id={`operation-${operation}`}
            type="radio"
            name="radio"
            value={operation}
            checked={active === operation}
            onChange={e => change(e)}
          />
          <Label htmlFor={`operation-${operation}`} />
          <div>{operation}</div>
        </Item>
      ))}
    </Container>
  );
};

Operations.propTypes = {
  change: PropTypes.func,
  active: PropTypes.string
};

Operations.defaultProps = {
  change: () => {},
  active: operations[0]
};

export default Operations;
