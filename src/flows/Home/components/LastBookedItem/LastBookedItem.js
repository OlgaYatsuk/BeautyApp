import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {fonts} from '../../../../framework/ui/fonts';

export const LastBookedItem = ({item, index}) => {
  return (
    <View index={index} style={styles.lastBookedItem}>
      <Text style={fonts.smallTitle}>{item.specialist}</Text>
      <Text style={fonts.text}>{item.procedure}</Text>
      <TouchableOpacity style={styles.imageWrapper}>
        <View style={styles.lastBookedItemSide}>
          <Image style={[styles.image, styles.bigImage]} />
        </View>
        <View style={styles.lastBookedItemSide}>
          <Image style={styles.image} />
          <Image style={styles.image} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
