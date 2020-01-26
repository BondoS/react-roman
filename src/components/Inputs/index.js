import React from 'react';
import PropTypes from 'prop-types';
import Input from '../ui/input';
import romanToDecimal from '../utils/romanToDecimal';
import { fieldPropType, initialFields } from '../main/initialState';
import Container from './styled';

const Inputs = ({ inputs, update }) => {
  return (
    <Container>
      {inputs.map((field, index) => (
        <div key={field.name} className="inputContain">
          <Input
            // focus first input
            autoFocus={index === 0}
            onChange={e => update(e)}
            onFocus={e => update(e)}
            name={field.name}
            placeholder={field.name}
            value={field.value}
            id={`${field.name}-input`}
          />
          {field.valid && (
            <sub className="inputDecimal" id={`${field.name}-decimal`}>
              {romanToDecimal(field.value).toLocaleString()}
            </sub>
          )}
          {field.errMsg && (
            <sub className="inputErr" id={`input-${field.name}-errMsg`}>
              {field.errMsg}
            </sub>
          )}
        </div>
      ))}
    </Container>
  );
};

Inputs.propTypes = {
  inputs: PropTypes.arrayOf(fieldPropType),
  update: PropTypes.func
};

Inputs.defaultProps = {
  inputs: initialFields,
  update: () => {}
};

export default Inputs;
