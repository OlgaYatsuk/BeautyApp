import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {TextField, Button} from '../../../../framework/ui/components';
import {commonStyles} from '../../../../framework/ui/styles';
import {registrationStyles} from '../../styles';
import useCameraRoll from '../../hooks/useCamera';
import ImagePicker from 'react-native-image-picker';

export const Step2 = ({navigation: {navigate}}) => {
  const [picture, setPictures] = useState([]);

  const getPhotos = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log(response);
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};
        console.log('source: ' + source);
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        setPictures(source);
      }
    });
  };

  return (
    <View style={commonStyles.container}>
      <TextField placeholder={'Tell us your name'} label={'Name:'} />
      <Image style={registrationStyles.userImage} source={picture} />
      <Button title="Get Photos" onPress={() => getPhotos()}>
        Get Photos
      </Button>
    </View>
  );
};
