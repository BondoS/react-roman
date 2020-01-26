- Conversion from decimal to roman is calculated using the "subtractive" notation, not "additive" notation [Wikipedia](https://en.wikipedia.org/wiki/Roman_numerals).
  - Which means `I, II, III, IV, V, VI, VII, VIII, IX, X.` NOT `I, II, III, IIII, V, VI, VII, VIII, VIIII, X`, please notice the difference in `4` and `9`
- This calculator works accurately if the result is less than or equal `3,999,999`.
- It can be easily modified to support more calculations by adding the correct numbers to `src/utils/romanMap.js` file.
- There are two validation techniques for this calculator.
  - Validating fields
    - Not empty.
    - Has a valid roman digits.
  - Validating operations
    - Division, must be by total numbers with no remaining, `x % y === 0`.
    - Subtraction, first number must be larger than the second.
- UI meant to be basic, more abstraction and enhancement may be done in the future.
