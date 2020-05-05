import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm component', () => {
  it('renders SearchForm', () => {
    const wrapper = shallow(<SearchForm query={'Radiohead'} onQueryChange={() => {}} onSubmit={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
