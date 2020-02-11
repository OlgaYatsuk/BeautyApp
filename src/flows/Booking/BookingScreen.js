import React from 'react';
import {View, Text} from 'react-native';
import {SpecialistInfo} from './сomponents/SpecialistInfo/SpecialistInfo';
import {commonStyles} from '../../framework/ui/styles';
import {WorkGallery} from './сomponents/WorkGallery';
import {Button, DatePicker} from '../../framework/ui/components';
import {styles} from './styles';

export const BookingScreen = () => {
  return (
    <View style={[commonStyles.container, commonStyles.darkScreen]}>
      <SpecialistInfo />
      <WorkGallery />
      <Button title={'Show availability'} />
      <DatePicker style={styles.datePicker} />
    </View>
  );
};
