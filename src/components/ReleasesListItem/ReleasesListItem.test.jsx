import React from 'react';
import { shallow } from 'enzyme';
import ReleasesListItem from './ReleasesListItem';

describe('ReleasesListItem component', () => {
  it('renders ReleasesListItem', () => {
    const wrapper = shallow(<ReleasesListItem id={'idstring'} title={'OK Computer'} coverArt={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
