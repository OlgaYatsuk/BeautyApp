import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from '../../framework/ui/components';
import {commonStyles} from '../../framework/ui/styles';
import {fonts} from '../../framework/ui/fonts';

export const RegistrationSummary = ({navigation: {navigate}}) => {
  return (
    <View style={commonStyles.container}>
      <Text style={[fonts.mediumTitle, fonts.centeredTitle]}>
        {`${name} ${surname}`}
      </Text>
      <Text style={[fonts.smallTitle, fonts.centeredTitle]}>{phone}</Text>
      <Text style={[fonts.centeredTitle]}>{bio}</Text>
      <Button title={'Go to the App'} onPress={() => navigate('Home')} />
    </View>
  );
};
