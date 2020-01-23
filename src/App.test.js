import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import Main from './components/main';

test('renders learn react link', () => {
  const wrapper = mount(<App />);
  // console.log(wrapper.debug());
  expect(wrapper.find(Main).exists()).toBeTruthy();
});
