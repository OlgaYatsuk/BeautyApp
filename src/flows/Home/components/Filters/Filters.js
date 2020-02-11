import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {fonts} from '../../../../framework/ui/fonts';
import {styles} from './styles';

export const Filters = () => {
  const filtersMap = [
    {title: 'Haircut', image: '💇🏻‍'},
    {title: 'Nails', image: '💅🏼'},
    {title: 'Make Up', image: '💄'},
    {title: 'Cosmetology', image: '🧖'},
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.filters}>
      {filtersMap.map((item, index) => (
        <View style={styles.filter} key={index}>
          <View
            style={[
              styles.filterImageWrapper,
              styles[`filterImageWrapper${index}`],
            ]}>
            <Text style={styles.filterImage}>{item.image}</Text>
          </View>
          <Text style={fonts.smallTitle}>{item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
