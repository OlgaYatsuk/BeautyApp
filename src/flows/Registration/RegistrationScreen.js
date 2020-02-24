// @flow

import React from 'react';
import {View, ImageBackground, TouchableOpacity, Text} from 'react-native';
import {TextField, Button} from '../../framework/ui/components';
import {registrationStyles} from './styles';
import {commonStyles} from '../../framework/ui/styles';
import * as images from '../../framework/ui/images';

const RegistrationScreen = ({navigation: {navigate}}) => {
  return (
    <ImageBackground
      source={images.default.registrationBg}
      style={[registrationStyles.registrationScreen, commonStyles.container]}>
      <View>
        <TextField placeholder="Your phone, please" />
        <TextField placeholder="And your password" />
        <Button
          onPress={() => navigate('Home')}
          title="Dive into beauty world"
        />
        <TouchableOpacity
          onPress={() => navigate('RegistrationForm', {screen: 'Step1'})}>
          <Text style={registrationStyles.registrationLink}>
            Or tap to register ->
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default RegistrationScreen;
