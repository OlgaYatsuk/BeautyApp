import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import {Button} from '../../../../framework/ui/components';
import {commonStyles} from '../../../../framework/ui/styles';
import * as images from '../../../../framework/ui/images';
import {registrationStyles} from '../../styles';
import ImagePicker from 'react-native-image-picker';
import {fonts} from '../../../../framework/ui/fonts';
import {registrationStore} from '../../../../framework/stores/RegistrationStore';
import { observer } from "mobx-react";

export const Step2 = observer(({navigation: {navigate}}) => {
  const [photo, setPhoto] = useState(images.default.user);
  const [photoPermission, setPhotoPermission] = useState(false);

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
      try {
        if (response.error) {
          //TODO: handle loading error
          console.log('ImagePicker Error: ', response.error);
        } else {
          let source = {uri: response.uri};
          setPhoto(source);
        }
      } catch (e) {
        console.log(e);
      }
    });
  };

  const onSubmitStep = () => {
    registrationStore.addPhoto(photo);
    navigate('Step3');
  };

  return (
    <View style={commonStyles.container}>
      <Text style={[fonts.smallTitle, fonts.centeredTitle]}>
        Please, upload your photo, to show your beauty to everyone!
      </Text>
      <View style={registrationStyles.userImageWrapper}>
        <Image
          style={registrationStyles.userImage}
          source={photo}
        />
        {photo && (
          <Text style={registrationStyles.userImageCaption}>
            Looks just great!✨
          </Text>
        )}
      </View>
      <Button title="Upload photo" onPress={() => getPhotos()} />
      <Button
        title="Move to the next step"
        type={'buttonInverted'}
        onPress={onSubmitStep}
      />
    </View>
  );
});
