import React from 'react';
import { shallow } from 'enzyme';
import SearchContainer from './SearchContainer';

describe('SearchContainer component', () => {
  it('renders SearchContainer', () => {
    const wrapper = shallow(<SearchContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
