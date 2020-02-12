import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export const styles = StyleSheet.create({
  hideCalendarButton: {
    width: 20,
    height: 20,
    borderRightWidth: 2,
    backgroundColor: colors.black,
    borderBottomWidth: 2,
    borderColor: colors.turquoise,
    marginBottom: 2,
    top: -10,
    left: -5,
    flexDirection: 'row',
    alignSelf: 'center',
  },

  datePicker: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: colors.black,
    borderTopWidth: 2,
    overflow: 'hidden',
    borderColor: colors.turquoise,
    paddingBottom: 50,
  },
  calendarTouchableZone: {
    height: 15,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
});
