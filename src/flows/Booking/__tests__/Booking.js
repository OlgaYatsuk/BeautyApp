import React from 'react';
import renderer from 'react-test-renderer';
import {BookingScreen} from '../BookingScreen';

describe('Booking flow', () => {
  const component = renderer.create(<BookingScreen />).toJSON();
  it('shouldMatchSnapshot', expect(component).toMatchSnapshot());

  it('availableServicesSelection', () => {
    component.find('Button').prop('onClick')();
  });
});
