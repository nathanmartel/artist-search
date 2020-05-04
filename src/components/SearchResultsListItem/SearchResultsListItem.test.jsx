import React from 'react';
import { shallow } from 'enzyme';
import SearchResultsListItem from './SearchResultsListItem';

describe('SearchResultsListItem component', () => {
  it('renders SearchResultsListItem', () => {
    const wrapper = shallow(<SearchResultsListItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
