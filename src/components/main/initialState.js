import PropTypes from 'prop-types';
import map from '../utils/romanMap';

const validation = [
  {
    type: 'required',
    validate: v => v !== '',
    message: 'This field is required'
  },
  {
    type: 'roman',
    validate: v =>
      v
        .trim()
        .split('')
        .every(num => /[\u0305]/.test(num) || Object.keys(map).includes(num)),
    // [\u0305] is the unicode for ◌̅  https://www.compart.com/en/unicode/U+0305
    message: 'Please enter valid roman number'
  }
];

const validationPropTypes = PropTypes.shape({
  type: PropTypes.string,
  validate: PropTypes.func,
  message: PropTypes.string
});

export const operations = ['add', 'sub', 'multi', 'divide'];

const firstRomanNumber = Object.keys(map)[0];

export const initialFields = [
  {
    name: 'first',
    value: firstRomanNumber,
    focused: true,
    valid: true,
    errMsg: '',
    validation
  },
  {
    name: 'second',
    value: firstRomanNumber,
    focused: false,
    valid: true,
    errMsg: '',
    validation
  }
];

export const fieldPropType = PropTypes.shape({
  name: PropTypes.string,
  value: PropTypes.string,
  focused: PropTypes.bool,
  valid: PropTypes.bool,
  errMsg: PropTypes.string,
  validation: PropTypes.arrayOf(validationPropTypes)
});

export const statePropTypes = PropTypes.shape({
  fields: fieldPropType,
  allValid: PropTypes.bool,
  operation: PropTypes.string
});

export default {
  fields: initialFields,
  allValid: true,
  operation: operations[0],
  resultRoman: '',
  errMsg: null
};
