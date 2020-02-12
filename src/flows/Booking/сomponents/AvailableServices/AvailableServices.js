import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {fonts} from '../../../../framework/ui/fonts';

export const AvailableServices = () => {
  const renderAvailableService = () => {
    return (
      <TouchableOpacity style={styles.availableServicesImage}>
        <Image />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.availableServices}>
      <Text style={[fonts.mediumTitle, fonts.titleWhite]}>Choose services</Text>
      <View style={styles.availableServicesGrid}>
        {renderAvailableService()}
        {renderAvailableService()}
        {renderAvailableService()}
        {renderAvailableService()}
        {renderAvailableService()}
        {renderAvailableService()}
        {renderAvailableService()}
        {renderAvailableService()}
      </View>
    </View>
  );
};
