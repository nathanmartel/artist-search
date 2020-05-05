import React from 'react';
import { shallow } from 'enzyme';
import TrackListItem from './TrackListItem';

describe('TrackListItem component', () => {
  it('renders TrackListItem', () => {
    const wrapper = shallow(<TrackListItem id={'idstring'} title={'Fitter Happier'} length={'12345'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
