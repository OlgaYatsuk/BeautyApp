import {StyleSheet} from 'react-native';
import {colors} from '../../../../framework/ui/colors';

export const styles = StyleSheet.create({
  workGallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  galleryImage: {
    height: 130,
    borderRadius: 16,
    marginBottom: 12,
    width: '48.5%',
    backgroundColor: colors.orange,
  },
});
