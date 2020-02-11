import {StyleSheet} from 'react-native';
import {colors} from '../../../../framework/ui/colors';

export const styles = StyleSheet.create({
  specialistWrapper: {
    alignItems: 'center',
  },
  specialistImage: {
    borderRadius: 200,
    backgroundColor: colors.purple,
    width: 150,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 24,
  },
  specialistText: {
    marginTop: 16,
    paddingHorizontal: 16,
    textAlign: 'center',
  },
});
