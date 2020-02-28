import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextField, Button} from '../../../../framework/ui/components';
import {commonStyles} from '../../../../framework/ui/styles';
import {registrationStyles} from '../../styles';
import {registrationStore} from '../../../../framework/stores/RegistrationStore';
import {observer} from 'mobx-react';

export const Step3 = observer(({navigation: {navigate}}) => {
  const [bio, setBio] = useState('');

  const onBioChange = bioValue => {
    setBio(bioValue);
  };

  const onSubmitStep = () => {
    registrationStore.addBio(bio);
    navigate('RegistrationSummary');
  };

  return (
    <View style={commonStyles.container}>
      <TextField
        style={registrationStyles.longInput}
        onChangeText={onBioChange}
        placeholder={'Tell something about your life and hobbies'}
        label={'Just a few words for us to know you better:'}
      />
      <Button title={'Review profile'} onPress={onSubmitStep} />
    </View>
  );
});
