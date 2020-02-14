import {StyleSheet} from 'react-native';
import {colors} from '../../../../framework/ui/colors';

export const styles = StyleSheet.create({
  availableServices: {
    marginTop: 20,
    marginBottom: 20,
  },
  availableServicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
  },
  availableService: {
    height: 70,
    borderRadius: 16,
    marginBottom: 10,
    marginRight: 10,
    width: '30.2%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.orange,
  },
  availableServiceSelected: {
    backgroundColor: colors.turquoise,
  },
  availableServicesName: {
    fontWeight: '600',
    fontSize: 20,
    color: colors.white,
    alignSelf: 'center',
  },
  duration: {
    marginTop: 24,
  },
});
