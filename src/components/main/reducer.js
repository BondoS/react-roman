import produce from 'immer';

let currIndex;
let focused;

export default (state, { value, name }) => {
  let firstErrorMessage = null;

  return produce(state, draftState => {
    const validate = index => {
      draftState.fields[index].valid = draftState.fields[
        currIndex
      ].validation.every(rule => {
        if (rule.validate(value)) return true;
        firstErrorMessage = firstErrorMessage || rule.message;
        return false;
      });
      // if any error message found after running all validations? assign it to the field's error message, in order to show it to the user.
      // else if all validation passed, just set the error message to null in order to remove any old possible messages.
      draftState.fields[index].errMsg = firstErrorMessage || null;
      draftState.allValid = draftState.fields.every(field => field.valid);
    };
    switch (name) {
      case 'first':
      case 'second':
        // unFocus all
        draftState.fields.forEach((field, index) => {
          draftState.fields[index].focused = false;
          if (field.name === name) currIndex = index;
        });
        // just focus current
        draftState.fields[currIndex].focused = true;
        draftState.fields[currIndex].value = value;
        validate(currIndex);
        break;
      case 'radio':
        draftState.operation = value;
        break;
      case 'pad':
        state.fields.forEach((field, index) => {
          if (field.focused === true) focused = index;
        });
        draftState.fields[focused].value += value;
        validate(focused);
        break;
      default:
        break;
    }
  });
};
