import {StyleSheet} from 'react-native';
import {colors} from '../../../../framework/ui/colors';

export const styles = StyleSheet.create({
  availableServices: {
    marginTop: 20,
  },
  availableServicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
  },
  availableServicesImage: {
    height: 110,
    borderRadius: 16,
    marginBottom: 10,
    marginRight: 10,
    width: '30.2%',
    backgroundColor: colors.orange,
  },
});
