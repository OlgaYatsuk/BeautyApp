import {StyleSheet} from 'react-native';
import {colors} from '../../../../framework/ui/colors';

export const styles = StyleSheet.create({
  lastBookedItem: {
    marginTop: 8,
  },
  lastBookedItemSide: {
    flex: 1,
  },
  imageWrapper: {
    marginTop: 12,
    flexDirection: 'row',
  },
  image: {
    borderRadius: 16,
    flex: 1,
    marginBottom: 12,
    backgroundColor: colors.purple,
  },
  bigImage: {
    height: 200,
    resizeMode: 'cover',
    marginRight: 12,
  },
  reversed: {
    flexDirection: 'row-reverse',
  },
});
