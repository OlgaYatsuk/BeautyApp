import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles';
import {fonts} from '../../../../framework/ui/fonts';

export const WorkGallery = () => {
  return (
    <View style={styles.workGallery}>
      <Image style={styles.galleryImage} />
      <Image style={styles.galleryImage} />
      <Image style={styles.galleryImage} />
      <Image style={styles.galleryImage} />
    </View>
  );
};
