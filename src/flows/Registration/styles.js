import {StyleSheet} from 'react-native';
import {colors} from '../../framework/ui/colors';

export const registrationStyles = StyleSheet.create({
  registrationScreen: {
    justifyContent: 'flex-end',
    flex: 1,
    paddingTop: 100,
    paddingBottom: 80,
  },
  registrationLink: {
    color: colors.pink,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '600',
  },
  userImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
});
