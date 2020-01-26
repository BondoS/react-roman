/* eslint-disable no-unused-vars */
import React from 'react';
import { mount, unmount } from 'enzyme';
import Main from './index';

let wrapper;
const firstIn = '#first-input';
const secondIn = '#second-input';
const firstDc = '#first-decimal';
const secondDc = '#second-decimal';
const resRo = '#result-roman';
const resDc = '#result-decimal';
const resRoContain = '#roman-container';
const errMsg = '#err-msg';

beforeEach(() => {
  wrapper = mount(<Main />);
});

afterEach(() => {
  wrapper.unmount();
});

it('renders main', () => {
  const firstInput = wrapper.find(firstIn);
  const firstDecimal = wrapper.find(firstDc);
  const secondInput = wrapper.find(secondIn);
  const secondDecimal = wrapper.find(secondDc);
  expect(firstInput.hostNodes().prop('value')).toBe('I');
  expect(firstDecimal.hostNodes().text()).toBe('1');
  expect(secondInput.hostNodes().prop('value')).toBe('I');
  expect(secondDecimal.hostNodes().text()).toBe('1');
  expect(secondInput.hostNodes().prop('value')).toBe('I');
  expect(secondDecimal.hostNodes().text()).toBe('1');
});

it('Change inputs values', () => {
  wrapper
    .find(firstIn)
    .hostNodes()
    .simulate('change', {
      target: { value: 'II', name: 'first' }
    });

  expect(
    wrapper
      .find(firstIn)
      .hostNodes()
      .prop('value')
  ).toBe('II');

  expect(
    wrapper
      .find(firstDc)
      .hostNodes()
      .text()
  ).toBe('2');

  expect(
    wrapper
      .find(resRo)
      .hostNodes()
      .text()
  ).toBe('III');

  expect(
    wrapper
      .find(resDc)
      .hostNodes()
      .text()
  ).toBe('3');
});

it('Change operation radio to multiply', () => {
  wrapper
    .find(firstIn)
    .hostNodes()
    .simulate('change', {
      target: { value: 'II', name: 'first' }
    });
  wrapper
    .find(secondIn)
    .hostNodes()
    .simulate('change', {
      target: { value: 'II', name: 'second' }
    });

  wrapper
    .find(secondIn)
    .hostNodes()
    .simulate('change', {
      target: { value: 'multi', name: 'radio' }
    });

  expect(
    wrapper
      .find(resRo)
      .hostNodes()
      .text()
  ).toBe('IV');

  expect(
    wrapper
      .find(resDc)
      .hostNodes()
      .text()
  ).toBe('4');
});

it('Change operation radio to subtract', () => {
  wrapper
    .find(firstIn)
    .hostNodes()
    .simulate('change', {
      target: { value: 'II', name: 'first' }
    });
  wrapper
    .find(secondIn)
    .hostNodes()
    .simulate('change', {
      target: { value: 'II', name: 'second' }
    });

  wrapper
    .find(secondIn)
    .hostNodes()
    .simulate('change', {
      target: { value: 'sub', name: 'radio' }
    });

  expect(
    wrapper
      .find(resRoContain)
      .hostNodes()
      .text()
  ).toBe('No results, invalid inputs');

  expect(
    wrapper
      .find(errMsg)
      .hostNodes()
      .text()
  ).toBe('First number must be larger');
});
