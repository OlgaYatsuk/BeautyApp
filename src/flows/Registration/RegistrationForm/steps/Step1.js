import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextField, Button} from '../../../../framework/ui/components';
import {commonStyles} from '../../../../framework/ui/styles';

export const Step1 = ({navigation}) => {
  return (
    <View style={commonStyles.container}>
      <TextField placeholder={'Tell us your name'} label={'Name:'} />
      <TextField placeholder={'And now your surname'} label={'Surname:'} />
      <TextField placeholder={'Phone'} label={'Phone:'} />
      <TextField placeholder={'Birthday'} label={'Birthday:'} />
      <Button
        title={'Move to the next step'}
        onPress={() =>
          navigation.navigate('Step2')
        }
      />
    </View>
  );
};
