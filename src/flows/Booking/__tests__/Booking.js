import React from 'react';
import renderer from 'react-test-renderer';
import BookingScreen, {mapStateToProps} from '../BookingScreen';

describe('Booking flow', () => {
  const component = renderer.create(<BookingScreen />).toJSON();
  it('shouldMatchSnapshot', expect(component).toMatchSnapshot());

  // it('availableServicesSelection', () => {
  //   component.find('Button').prop('onClick')();
  // });

  describe('MapStateToProps', () => {
    it('should map state to props correctly', () => {
      const service = {
        date: '2020-26-02',
        type: 'nails',
      };
      const appState = {
        bookings: [service],
      };

      const componentState = mapStateToProps(appState.bookings);

      expect(componentState).toEqual(service);
    });
  });
});
