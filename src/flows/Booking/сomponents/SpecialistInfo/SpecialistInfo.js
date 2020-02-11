import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles';
import {fonts} from '../../../../framework/ui/fonts';

export const SpecialistInfo = () => {
  return (
    <View style={styles.specialistWrapper}>
      <Image style={styles.specialistImage} />
      <Text style={[fonts.mediumTitle, fonts.titleWhite]}>Olha Yatsuk</Text>
      <Text style={[fonts.text, fonts.textWhite]}>⭐️ 4.97</Text>
      <Text style={[fonts.text, fonts.textHalfOpacity, styles.specialistText]}>
        Fashion Based makeup. “Let Colour Catch Your Eye and Shout Out Loud”
        Great for a night out… Maybe you want a really boot-black smoky eye with nude lips, or the perfect flick eye liner.
      </Text>
    </View>
  );
};
