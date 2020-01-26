import React from 'react';
import PropTypes from 'prop-types';
import map from '../utils/romanMap';
import Button from '../ui/button';
import Container from './styled';

const Pad = ({ change }) => {
  return (
    <Container>
      {Object.keys(map)
        // .slice(0, 7) if we need to show only some of the full list
        .map(num => (
          <Button
            key={`pad-${num}`}
            type="button"
            onClick={() => change({ target: { name: `pad`, value: num } })}
            name={`pad-${num}`}
          >
            <div>{num}</div>
            <div>{map[num]}</div>
          </Button>
        ))}
    </Container>
  );
};

Pad.propTypes = {
  change: PropTypes.func
};

Pad.defaultProps = {
  change: () => {}
};

export default Pad;
