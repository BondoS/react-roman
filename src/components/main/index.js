import React, { useReducer } from 'react';
import MainStyled from '../ui/main';
import initialState from './initialState';
import reducer from './reducer';
import romanToDecimal from '../utils/romanToDecimal';
import Inputs from '../Inputs';
import Operations from '../operations';
import decimalToRoman from '../utils/decimalToRoman';
import isNumber from '../utils/isNumber';
import Pad from '../pad';

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const update = event => {
    dispatch(event.target);
  };

  let errMsg = null;
  // expensive calculations outside reducer
  const calculate = () => {
    const firstDecimal = romanToDecimal(state.fields[0].value);
    const secondDecimal = romanToDecimal(state.fields[1].value);
    let resultDecimal;
    switch (state.operation) {
      case 'sub':
        if (firstDecimal <= secondDecimal) {
          errMsg = 'First number must be larger';
          resultDecimal = null;
        } else {
          errMsg = null;
          resultDecimal = firstDecimal - secondDecimal;
        }
        break;
      case 'multi':
        resultDecimal = firstDecimal * secondDecimal;
        break;
      case 'divide':
        if (firstDecimal % secondDecimal !== 0) {
          errMsg = 'First number can not be divided by the second';
          resultDecimal = null;
        } else {
          errMsg = null;
          resultDecimal = firstDecimal / secondDecimal;
        }
        break;
      case 'add':
      default:
        resultDecimal = firstDecimal + secondDecimal;
    }
    const resultRoman = () => {
      if (isNumber(resultDecimal) && decimalToRoman(resultDecimal) !== -1) {
        return (
          <div className="resultRomanContainer">
            <span className="resultRomanLabel">Result:</span>
            <span className="resultRomanValue" id="result-roman">
              {decimalToRoman(resultDecimal)}
            </span>
          </div>
        );
      }
      return 'No results, invalid inputs';
    };
    return {
      decimal:
        isNumber(resultDecimal) && resultDecimal !== 0 ? resultDecimal : '',
      roman: resultRoman()
    };
  };

  const { decimal, roman } = calculate();

  return (
    <>
      <MainStyled>
        <Inputs inputs={state.fields} update={update} />
        {state.allValid && (
          <>
            <div className="romanOuter" id="roman-container">
              {roman}
              <div className="resultDecimal" id="result-decimal">
                {decimal.toLocaleString()}
              </div>
            </div>
          </>
        )}
        {errMsg && (
          <div className="errMsg" id="err-msg">
            {errMsg}
          </div>
        )}
        <Operations active={state.operation} change={update} />
        <Pad change={update} />
      </MainStyled>
      <sub
        style={{ marginBottom: '10px', display: 'block', fontSize: '0.8rem' }}
      >
        Maximum accurate result is 3,999,999
      </sub>
    </>
  );
};

export default Main;
