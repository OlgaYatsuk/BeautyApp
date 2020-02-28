import React, {useState} from 'react';
import {View} from 'react-native';
import {TextField, Button} from '../../../../framework/ui/components';
import {commonStyles} from '../../../../framework/ui/styles';
import {registrationStore} from '../../../../framework/stores/RegistrationStore';
import {observer} from 'mobx-react';

export const Step1 = observer(({navigation: {navigate}}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [validationState, setValidationState] = useState({
    name: true,
    surname: true,
    phone: true,
  });

  const onNameChange = nameValue => {
    setName(nameValue);
  };

  const onSurnameChange = surnameValue => {
    setSurname(surnameValue);
  };

  const onPhoneChange = phoneValue => {
    setPhone(phoneValue);
  };

  const validateFields = () => {
    const validationObject = {...validationState};
    if (name.length < 3) {
      validationObject.name = false;
    }

    if (surname.length < 3) {
      validationObject.surname = false;
    }

    if (phone.length < 10) {
      validationObject.phone = false;
    }

    setValidationState(validationObject);
  };

  const onSubmitStep = () => {
    validateFields();
    const isFormValid = Object.values(validationState).some(
      item => item === false,
    );
    isFormValid && registrationStore.addMainInfo({name, surname, phone});
    isFormValid && navigate('Step2');
  };

  return (
    <View style={commonStyles.container}>
      <TextField
        name="name"
        style={!validationState.name && commonStyles.errorField}
        placeholder={'Tell us your name'}
        onChangeText={onNameChange}
        required
        label={'Name:'}
      />
      <TextField
        style={!validationState.surname && commonStyles.errorField}
        name="lastName"
        placeholder={'And now your surname'}
        onChangeText={onSurnameChange}
        label={'Surname:'}
      />
      <TextField
        name="phone"
        style={!validationState.phone && commonStyles.errorField}
        placeholder={'Phone'}
        onChangeText={onPhoneChange}
        label={'Phone:'}
      />
      <Button title={'Move to the next step'} onPress={onSubmitStep} />
    </View>
  );
});
