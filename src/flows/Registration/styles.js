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
    borderRadius: 8,
    resizeMode: 'cover',
  },
  userImageWrapper: {
    height: 380,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  userImageCaption: {
    fontWeight: '700',
    fontSize: 24,
    marginVertical: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  longInput: {
    height: 200,
  },
  userProfileImage: {
    width: 200,
    height: 200,
    borderRadius: 300,
    alignSelf: 'center',
    marginBottom: 32,
  },
});
