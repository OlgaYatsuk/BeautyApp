import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const commonStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  darkScreen: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: colors.black,
  },
  headerDark: {
    backgroundColor: colors.black,
    borderBottomWidth: 0,
  },
});
