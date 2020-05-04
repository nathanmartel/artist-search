import React from 'react';
import { shallow } from 'enzyme';
import SearchResultsList from './SearchResultsList';

describe('SearchResultsList component', () => {
  it('renders SearchResultsList', () => {
    const wrapper = shallow(<SearchResultsList />);
    expect(wrapper).toMatchSnapshot();
  });
});
