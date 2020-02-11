import {StyleSheet} from 'react-native';
import {colors} from '../../../../framework/ui/colors';

export const styles = StyleSheet.create({
  filters: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 32,
  },
  filter: {
    padding: 8,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 24,
    borderRadius: 16,
    marginRight: 16,
    backgroundColor: colors.lightblue,
  },
  filterImage: {
    fontSize: 24,
  },
  filterImageWrapper: {
    padding: 8,
    fontSize: 20,
    borderRadius: 16,
    marginRight: 10,
    alignSelf: 'flex-start',
  },
  filterImageWrapper0: {
    backgroundColor: colors.orange,
  },
  filterImageWrapper1: {
    backgroundColor: colors.turquoise,
  },
  filterImageWrapper2: {
    backgroundColor: colors.purple,
  },
  filterImageWrapper3: {
    backgroundColor: colors.pink,
  },
  filterImageWrapper4: {
    backgroundColor: colors.turquoise,
  },
  filterImageWrapper5: {
    backgroundColor: colors.black,
  },
});
