import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from '../../../../framework/ui/components';
import {commonStyles} from '../../../../framework/ui/styles';
import {registrationStore} from '../../../../framework/stores/RegistrationStore';
import {fonts} from '../../../../framework/ui/fonts';
import {registrationStyles} from '../../styles';

export const RegistrationSummary = ({navigation: {navigate}}) => {
  const {name, surname, phone, bio, photo} = registrationStore;

  return (
    <View style={commonStyles.container}>
      <Image style={registrationStyles.userProfileImage} source={photo} />
      <Text style={[fonts.mediumTitle, fonts.centeredTitle]}>
        {`${name} ${surname}`}
      </Text>
      <Text style={[fonts.smallTitle, fonts.centeredTitle]}>{phone}</Text>
      <Text style={[fonts.centeredTitle]}>{bio}</Text>
      <Button title={'Go to the App'} onPress={() => navigate('Home')} />
    </View>
  );
};
