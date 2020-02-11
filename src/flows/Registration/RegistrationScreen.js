// @flow

import React from 'react';
import {View, ImageBackground} from 'react-native';
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
      </View>
    </ImageBackground>
  );
};

export default RegistrationScreen;
